import React, { useEffect, useRef } from "react";

// Barra fina arriba que se llena conforme se desliza la invitación
export function Progress() {
  const ref = useRef(null);
  useEffect(() => {
    let raf = 0;
    const upd = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - innerHeight;
      if (ref.current) ref.current.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
    };
    const onS = () => { if (!raf) raf = requestAnimationFrame(upd); };
    addEventListener("scroll", onS, { passive: true });
    addEventListener("resize", onS);
    upd();
    return () => { removeEventListener("scroll", onS); removeEventListener("resize", onS); };
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-40 pointer-events-none" aria-hidden="true">
      <div ref={ref} className="h-full origin-left"
        style={{ transform: "scaleX(0)", background: "linear-gradient(90deg,var(--lime),var(--gold))", boxShadow: "0 0 8px var(--lime)" }} />
    </div>
  );
}
