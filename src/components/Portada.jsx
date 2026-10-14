import React from "react";
import { IMG, SIZE, BOTON } from "../config";

// Portada: la imagen de la clienta con el botón dentro de su etiqueta blanca
export function Portada({ onOpen, gone }) {
  const [w, h] = SIZE.portada;
  return (
    <div className={"portada fixed inset-0 z-20 grid place-items-center overflow-hidden " + (gone ? "gone" : "")} style={{ background: "#1d2b21" }}>
      <img src={IMG.portada} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl brightness-50" />
      <div className="pimg relative shadow-[0_20px_60px_rgba(0,0,0,.55)]"
        style={{ containerType: "inline-size", aspectRatio: w + "/" + h, width: `min(100vw, calc(100svh * ${w / h}))` }}>
        <img src={IMG.portada} width={w} height={h} alt="Mis XV, Kimberly Aylinn Resendiz Pedraza" className="w-full h-full block" />
        <button onClick={onOpen} aria-label="Abrir invitación" className="abrir absolute grid place-items-center text-center"
          style={{ left: BOTON.left + "%", top: BOTON.top + "%", width: BOTON.width + "%", height: BOTON.height + "%" }}>
          <span className="font-script leading-none text-[#5e7656]" style={{ fontSize: "6.4cqw" }}>Abrir invitación</span>
        </button>
      </div>
    </div>
  );
}
