import React, { useState, useEffect, useMemo } from "react";
import { Corners, Frog } from "./Decor";
import { IMG } from "../config";

export function Cover({ onOpen, gone }) {
  return (<div className={"cover fixed inset-0 z-20 grid place-items-center p-5 " + (gone ? "gone" : "")}
      style={{ background: "linear-gradient(rgba(6,20,34,.5),rgba(6,20,34,.82)),url(" + IMG.castle + ") 50% 20%/cover" }}>
    <div className="cardc parch relative w-[min(92vw,430px)] px-6 pt-10 pb-8 text-center">
      <Corners /><div className="absolute -top-14 right-3"><Frog size={108} /></div>
      <div className="font-script text-6xl text-[#6d7a1a] leading-none">XV</div>
      <p className="italic text-lg mt-2 pr-8">Con la bendición de Dios y el amor de mis padres, tengo el honor de invitarte a mis XV años</p>
      <h1 className="font-script text-5xl leading-[1.05] text-[#4a5a12] my-3">Kimberly Aylindiz Pedraza</h1>
      <p>18 de diciembre de 2026</p>
      <button className="btn" onClick={onOpen}>Abrir invitación</button>
    </div>
  </div>);
}

