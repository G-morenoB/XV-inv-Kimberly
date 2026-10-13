import React, { useState, useEffect, useMemo } from "react";
import { Defs, FlowerRow, Frog, Petals } from "./components/Decor";
import { Reveal } from "./components/Reveal";
import { Progress } from "./components/Progress";
import { Magic, magic } from "./components/Magic";
import { Hero } from "./components/Hero";
import { Cover } from "./components/Cover";
import { H, MapCard, PaseFamiliar, Place, Sec } from "./components/Sections";
import { MusicBtn } from "./components/MusicBtn";
import { Music } from "./lib/music";

function App() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => { document.body.classList.remove("locked"); window.scrollTo({ top: 0, left: 0, behavior: "instant" }); }, 900);
    return () => clearTimeout(t);
  }, [open]);
  const steps = [["7:00 p.m.", "Misa en la iglesia de San Miguel Arcángel"], ["9:00 p.m.", "Recepción en AD HOUSE"], ["10:30 p.m.", "Inicio del programa"]];
  return (<React.Fragment>
    <Defs /><Magic /><div className={"flash fixed inset-0 z-[25] pointer-events-none " + (open ? "go" : "")}></div>
    <Cover gone={open} onOpen={(e) => { setOpen(true); setPlaying(true); magic(e); Music.start(); }} />
    {open && (<MusicBtn on={playing} toggle={() => { if (playing) Music.pause(); else Music.resume(); setPlaying(!playing); }} />)}
    {open && (<React.Fragment><Progress /><div className="fixed inset-0 pointer-events-none overflow-hidden z-10 opacity-60"><Petals n={5} /></div></React.Fragment>)}
    <main className="max-w-[560px] mx-auto bg-[var(--night)] min-h-screen shadow-[0_0_60px_rgba(0,0,0,.6)]" >
      <Hero on={open} />
      <Sec>
        <Reveal variant="drop"><H>Con el amor de mis padres</H></Reveal>
        <Reveal variant="left" delay={.1}><p>Guillermo Resendiz Escalante</p></Reveal>
        <Reveal variant="right" delay={.25}><p>Mayli Pedraza Marín</p></Reveal>
        <Reveal variant="zoom" delay={.4}><p className="italic text-[var(--rose)] mt-5">Mis padrinos</p></Reveal>
        <Reveal variant="left" delay={.5}><p>Josse Emmanuel García Morales</p></Reveal>
        <Reveal variant="right" delay={.65}><p>Elisa Auret López Casimiro</p></Reveal>
      </Sec>
      <Place title="Misa de acción de gracias" big="7:00 p.m." sub="Iglesia de San Miguel Arcángel" q="Iglesia San Miguel Arcángel" />
      <Place title="Recepción" big="AD HOUSE" sub="9:00 p.m." q="AD HOUSE" />
      <MapCard />
      <Sec>
        <Reveal variant="drop"><H>Esa noche</H></Reveal>
        <ul className="text-left border-l-2 border-[var(--gold)] max-w-[340px] mx-auto mt-5">
          {steps.map(([h, t], i) => (<Reveal as="li" key={h} variant="right" delay={i * .35} className="relative pl-6 pb-6 last:pb-0">
            <span className="absolute -left-[8px] top-2 w-3.5 h-3.5 rounded-full bg-[var(--green)] border-2 border-[var(--gold)]"></span>
            <b className="block text-3xl text-[var(--lime)] leading-tight">{h}</b>{t}</Reveal>))}
        </ul>
      </Sec>
      <PaseFamiliar />
      <Sec>
        <Reveal variant="hop" className="flex justify-center"><Frog size={120} /></Reveal>
        <Reveal variant="drop" delay={.3}><H>Color verde exclusivo de la quinceañera</H></Reveal>
        <Reveal variant="pop" delay={.6} className="w-20 h-20 mx-auto my-3 rounded-full border-[3px] border-[var(--gold)]" style={{ background: "radial-gradient(circle at 35% 30%,#c4ca77,#8a912e 55%,#58571c)", boxShadow: "0 0 30px rgba(169,189,60,.5)" }}></Reveal>
        <Reveal variant="up" delay={.9}><p>Te pido evitar el verde para que ella brille como la princesa de la noche.</p></Reveal>
        
      </Sec>
      <FlowerRow />
      <Reveal variant="up"><p className="text-center italic text-[var(--rose)] pb-10 px-5">Te espero para hacer de esta noche un cuento de hadas.</p></Reveal>
    </main>
  </React.Fragment>);
}

export default App;
