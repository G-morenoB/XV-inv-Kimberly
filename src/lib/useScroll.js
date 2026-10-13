import { useEffect, useRef, useState } from "react";

const sinMovimiento = () =>
  typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

// Devuelve [ref, visto]: "visto" pasa a true la primera vez que el elemento entra en pantalla.
// Usa IntersectionObserver y, como respaldo, revisa la posición al deslizar.
export function useInView({ threshold = 0.2 } = {}) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (sinMovimiento() || !("IntersectionObserver" in window)) { setSeen(true); return; }
    let done = false, raf = 0;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) show(); }, { threshold, rootMargin: "0px 0px -8% 0px" });
    function cleanup() {
      io.disconnect();
      removeEventListener("scroll", onS);
      removeEventListener("resize", onS);
      cancelAnimationFrame(raf);
    }
    function show() { if (done) return; done = true; setSeen(true); cleanup(); }
    function check() {
      raf = 0;
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.92 && r.bottom > 0) show();
    }
    function onS() { if (!raf) raf = requestAnimationFrame(check); }
    io.observe(el);
    addEventListener("scroll", onS, { passive: true });
    addEventListener("resize", onS);
    onS();
    return cleanup;
  }, []);
  return [ref, seen];
}
