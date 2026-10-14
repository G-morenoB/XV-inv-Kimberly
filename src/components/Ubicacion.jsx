import React from "react";
import { LINKS } from "../config";

const Pin = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

export function Ubicacion() {
  const lugares = [
    ["Misa · 7:00 p.m.", "Iglesia de San Miguel Arcángel", LINKS.misa, "Cómo llegar a la iglesia"],
    ["Recepción · 9:00 p.m.", "Salón de fiestas AD HOUSE", LINKS.recepcion, "Cómo llegar al salón"],
  ];
  return (
    <div className="papel text-center px-4 py-6">
      <p className="font-script text-4xl leading-tight text-[#5e7656]">¿Cómo llegar?</p>
      <div className="mt-3 grid gap-5">
        {lugares.map(([titulo, lugar, href, boton]) => (
          <div key={titulo}>
            <p className="text-2xl font-semibold text-[#5e7656] leading-tight">{titulo}</p>
            <p>{lugar}</p>
            <a className="btn-mapa" href={href} target="_blank" rel="noopener noreferrer"><Pin />{boton}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
