import React, { useState, useEffect } from "react";
import { Portada } from "./components/Portada";
import { Magic, magic } from "./components/Magic";
import { MusicBtn } from "./components/MusicBtn";
import { Reveal } from "./components/Reveal";
import { Contador } from "./components/Contador";
import { Ubicacion } from "./components/Ubicacion";
import { Music } from "./lib/music";
import { IMG, SIZE } from "./config";

export default function App() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      document.body.classList.remove("locked");
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 900);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <React.Fragment>
      <Magic />
      <Portada gone={open} onOpen={(e) => { setOpen(true); setPlaying(true); magic(e); Music.start(); }} />
      {open && (
        <MusicBtn on={playing} toggle={() => { if (playing) Music.pause(); else Music.resume(); setPlaying(!playing); }} />
      )}
      <main className={"mx-auto max-w-[640px] px-3 py-6 flex flex-col gap-8 " + (open ? "abierta" : "")}>
        {/* Las dos imágenes de la clienta se muestran completas y sin modificar */}
        <img src={IMG.invitacion} width={SIZE.invitacion[0]} height={SIZE.invitacion[1]} className="entrada w-full h-auto block shadow-[0_14px_40px_rgba(0,0,0,.45)]"
          alt="Invitación a los XV años de Kimberly Aylinn Resendiz Pedraza. 18 de diciembre de 2026. Misa a las 7:00 p.m. en la iglesia de San Miguel Arcángel. Recepción en el salón de fiestas AD HOUSE a las 9:00 p.m. Inicio del programa a las 10:30 p.m. Color verde exclusivo de la quinceañera." />
        <Reveal variant="up"><Contador /></Reveal>
        <Reveal variant="up"><Ubicacion /></Reveal>
        <Reveal variant="zoom">
          <img src={IMG.pase} width={SIZE.pase[0]} height={SIZE.pase[1]} loading="lazy" decoding="async" className="w-full h-auto block shadow-[0_14px_40px_rgba(0,0,0,.45)]"
            alt="Pase familiar. Tu presencia es el mejor regalo para mí. Mi mayor ilusión es compartir esta noche contigo. Si deseas hacerme un obsequio, te agradeceré que sea en efectivo, utilizando el sobre que encontrarás en la recepción. ¡Gracias por ser parte de mis XV años!" />
        </Reveal>
        <p className="font-script text-3xl text-center text-[#e9dcb4]/80 pb-6">Kimberly Aylinn · 18 de diciembre de 2026</p>
      </main>
    </React.Fragment>
  );
}
