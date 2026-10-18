import React, { useMemo, useEffect } from "react";
import { useInView } from "../lib/useScroll";

const SELLOS = ["#5e7656", "#c9a24f", "#d98aa0", "#8f78c8"];

function Sobre({ sello }) {
  return (
    <svg viewBox="0 0 60 44" width="100%" aria-hidden="true">
      <rect x="1.5" y="3" width="57" height="38" rx="4" fill="#f7efd6" stroke="#c9a24f" strokeWidth="1.6" />
      <path d="M2 5l28 20L58 5" fill="none" stroke="#c9a24f" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M2 40l21-17M58 40L37 23" fill="none" stroke="#d9c58f" strokeWidth="1" />
      <circle cx="30" cy="25" r="6.5" fill={sello} />
      <path d="M30 29C26 26.5 25 25 25 23.6a2.4 2.4 0 0 1 5-.8 2.4 2.4 0 0 1 5 .8C35 25 34 26.5 30 29z" fill="#fff6dc" />
    </svg>
  );
}

// Lluvia de sobres que cae una sola vez (dos pasadas) cuando la imagen aparece al deslizar.
// Se coloca dentro de un contenedor "relative overflow-hidden".
export function LluviaSobres({ cantidad = 16 }) {
  const [ref, go] = useInView({ threshold: 0.35 });
  const lista = useMemo(() => Array.from({ length: cantidad }, (_, i) => ({
    sello: SELLOS[i % SELLOS.length],
    w: 34 + Math.random() * 26,
    st: {
      left: 4 + Math.random() * 88 + "%",
      "--r0": Math.random() * 60 - 30 + "deg",
      "--sx": Math.random() * 90 - 45 + "px",
      animationDuration: 4.2 + Math.random() * 3 + "s",
      animationDelay: Math.random() * 3.5 + "s",
    },
  })), [cantidad]);
  useEffect(() => {
    if (go && ref.current) ref.current.style.setProperty("--fall", ref.current.offsetHeight + 100 + "px");
  }, [go]);
  return (
    <div ref={ref} className={"lluvia absolute inset-0 pointer-events-none overflow-hidden " + (go ? "go" : "")} aria-hidden="true">
      {lista.map((s, i) => (
        <span key={i} className="sobre" style={{ ...s.st, width: s.w + "px" }}><Sobre sello={s.sello} /></span>
      ))}
    </div>
  );
}
