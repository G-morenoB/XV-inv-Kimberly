import React from "react";
import { Reveal } from "./Reveal";

// Luciérnaga con la cola que se enciende y se apaga. Entra volando cuando aparece su sección
// y luego se queda dando vueltitas.
// pos: clases de Tailwind de posición (relativas a la sección). from: "left" | "right".
// hover: "a" | "b" (dos recorridos de vuelo). delay: segundos antes de entrar.
export function Luciernaga({ pos = "top-4 right-4", size = 64, from = "right", delay = 0.4, hover = "a" }) {
  return (
    <Reveal variant={from === "left" ? "flyl" : "flyr"} delay={delay} className={"absolute z-[5] pointer-events-none " + pos}>
      <div className={"ff-" + hover}>
        <svg viewBox="0 0 80 60" width={size} aria-hidden="true"
          style={{ overflow: "visible", transform: from === "right" ? "scaleX(-1)" : undefined, "--g": (hover === "a" ? 0 : -1.4) + "s" }}>
          <defs>
            <radialGradient id="ffg">
              <stop offset="0" stopColor="#efffc0" stopOpacity=".95" />
              <stop offset=".35" stopColor="#9be84a" stopOpacity=".55" />
              <stop offset="1" stopColor="#5fcf3a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle className="ffglow" cx="15" cy="35" r="34" fill="url(#ffg)" />
          <g fill="#dcffd0" fillOpacity=".5" stroke="#eaffdf" strokeOpacity=".8" strokeWidth=".7">
            <g transform="rotate(-12 46 27)"><ellipse className="fwing b" style={{ transformOrigin: "46px 27px" }} cx="34" cy="16" rx="16" ry="5.5" /></g>
            <g transform="rotate(-30 46 27)"><ellipse className="fwing" style={{ transformOrigin: "46px 27px" }} cx="34" cy="14" rx="17" ry="6" /></g>
          </g>
          <path d="M44 37l-3 8M36 38l-3 9M28 38l-2 8" stroke="#1f3a12" strokeWidth="1.4" strokeLinecap="round" />
          <ellipse className="ffbody" cx="15" cy="34" rx="10" ry="7.5" fill="#b6f24f" />
          <ellipse className="ffbody" cx="13" cy="34" rx="5" ry="3.8" fill="#f2ffcf" />
          <ellipse cx="33" cy="30" rx="19" ry="8.2" fill="#2f6a22" transform="rotate(-6 33 30)" />
          <path d="M20 27Q34 23 48 27" stroke="#5fa23a" strokeWidth="1.2" fill="none" />
          <ellipse cx="51" cy="30" rx="7.5" ry="6.5" fill="#7fc238" />
          <ellipse cx="51" cy="30" rx="3.5" ry="3" fill="#2f6a22" opacity=".55" />
          <circle cx="60" cy="31" r="5" fill="#1f4a17" />
          <circle cx="62" cy="29.5" r="1.4" fill="#fff" />
          <path d="M62 27Q67 20 72 22M63 29Q70 25 74 28" stroke="#1f4a17" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </Reveal>
  );
}
