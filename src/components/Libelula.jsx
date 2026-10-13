import React from "react";
import { Reveal } from "./Reveal";

const PAL = {
  green: { b: "#6d7a1a", a: "#a9bd3c", w: "#e3f5c8" },
  teal: { b: "#1f8f8a", a: "#7fe0d0", w: "#d2f7f1" },
  pink: { b: "#c75b7a", a: "#f4a6bd", w: "#fde0ea" },
  gold: { b: "#b88a2d", a: "#f6dc84", w: "#fff3cc" },
};

// Libélula que entra volando cuando aparece su sección y luego se queda revoloteando.
// pos: clases de Tailwind de posición (relativas a la sección). from: "left" | "right".
// color: green | teal | pink | gold. hover: "a" | "b" (dos estilos de vuelo).
export function Libelula({ pos = "top-4 right-4", size = 80, color = "teal", from = "right", delay = 0.4, hover = "a" }) {
  const c = PAL[color];
  const wing = (cx, cy, rx, ry, rot, ox, hind) => (
    <g transform={`rotate(${rot} ${ox} 40)`}>
      <ellipse className={"wing" + (hind ? " h" : "")} style={{ transformOrigin: `${ox}px 40px` }} cx={cx} cy={cy} rx={rx} ry={ry} />
    </g>
  );
  return (
    <Reveal variant={from === "left" ? "flyl" : "flyr"} delay={delay} className={"absolute z-[5] pointer-events-none " + pos}>
      <div className={"hov-" + hover}>
        <svg viewBox="0 0 120 80" width={size} aria-hidden="true"
          style={{ overflow: "visible", transform: from === "right" ? "scaleX(-1)" : undefined, filter: `drop-shadow(0 0 5px ${c.a})` }}>
          <g fill={c.w} fillOpacity=".5" stroke="#fff" strokeOpacity=".85" strokeWidth=".8">
            {wing(72, 16, 9, 22, -24, 74, true)}
            {wing(72, 64, 9, 22, 24, 74, true)}
            {wing(86, 17, 8, 23, -14, 86, false)}
            {wing(86, 63, 8, 23, 14, 86, false)}
          </g>
          <path d="M72 37.5L8 39.2Q4 40 8 40.8L72 42.5Z" fill={c.b} />
          <path d="M60 38.2v3.6M50 38.5v3M40 38.7v2.6M30 38.9v2.2M20 39.1v1.8" stroke={c.a} strokeWidth="1" opacity=".8" />
          <ellipse cx="80" cy="40" rx="11" ry="6.5" fill={c.b} />
          <ellipse cx="80" cy="40" rx="6" ry="2.4" fill={c.a} opacity=".6" />
          <circle cx="96" cy="40" r="5.5" fill={c.b} />
          <circle cx="98" cy="36.5" r="4" fill={c.a} /><circle cx="98" cy="43.5" r="4" fill={c.a} />
          <circle cx="99" cy="35.5" r="1.2" fill="#fff" /><circle cx="99" cy="42.5" r="1.2" fill="#fff" />
        </svg>
      </div>
    </Reveal>
  );
}
