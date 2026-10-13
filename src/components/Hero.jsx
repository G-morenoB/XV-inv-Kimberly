import React, { useState, useEffect, useMemo, useRef } from "react";
import { Fireflies, Petals } from "./Decor";
import { EVENT, IMG } from "../config";

export function Countdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const s = Math.max(0, Math.floor((EVENT - now) / 1000));
  const items = [[Math.floor(s / 86400), "días"], [Math.floor(s % 86400 / 3600), "horas"], [Math.floor(s % 3600 / 60), "min"], [s % 60, "seg"]];
  return (<div className="flex justify-center gap-2.5 mt-4">
    {items.map(([n, l]) => (<div key={l} className="min-w-[64px] py-2 px-1 rounded-xl border border-[var(--gold)] bg-white/5">
      <b className="block text-3xl leading-tight text-[var(--gold)]">{n}</b><span className="text-base">{l}</span></div>))}
  </div>);
}

export function Hero({ on }) {
  const bgRef = useRef(null), txtRef = useRef(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const upd = () => {
      raf = 0;
      const y = Math.min(window.scrollY, 1200);
      if (bgRef.current) bgRef.current.style.transform = `translate3d(0,${y * .3}px,0) scale(${1 + y * .0003})`;
      if (txtRef.current) { txtRef.current.style.transform = `translate3d(0,${y * -.12}px,0)`; txtRef.current.style.opacity = Math.max(0, 1 - y / 650); }
    };
    const onS = () => { if (!raf) raf = requestAnimationFrame(upd); };
    addEventListener("scroll", onS, { passive: true });
    return () => removeEventListener("scroll", onS);
  }, []);
  return (<header className={"relative overflow-hidden h-[100svh] min-h-[760px] max-h-[920px] " + (on ? "on" : "")}>
    <div ref={bgRef} className="absolute inset-0 will-change-transform">
    <img src={IMG.castle} alt="Castillo bajo la luna creciente" className="castle absolute inset-0 w-full h-full object-cover object-[50%_20%]" />
    <div className="absolute inset-0" style={{ background: "linear-gradient(transparent 42%,rgba(10,28,46,.85) 72%,var(--night) 98%)" }}></div>
    </div>
    <Fireflies n={10} /><Petals n={8} />
    <div ref={txtRef} className="absolute inset-x-0 bottom-0 px-4 pb-10 text-center">
      <div className="rv font-script text-6xl text-[var(--lime)] leading-none" style={{ "--d": ".8s" }}>XV</div>
      <h2 className="rv font-script text-[clamp(46px,13vw,72px)] leading-[1.02] my-1 [text-shadow:0_2px_14px_rgba(0,0,0,.7)]" style={{ "--d": "1.1s" }}>Kimberly Aylindiz Pedraza</h2>
      <div className="rv" style={{ "--d": "1.5s" }}>
        <p className="text-2xl tracking-wide">Viernes 18 de diciembre de 2026</p>
        <Countdown />
        <p className="italic text-[var(--rose)] mt-5">Desliza para ver los detalles<span className="block bob text-3xl leading-none" aria-hidden="true">⌄</span></p>
      </div>
    </div>
  </header>);
}

