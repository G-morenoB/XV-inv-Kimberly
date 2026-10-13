import React, { useState, useEffect, useMemo } from "react";
import { Reveal } from "./Reveal";

export function Defs() {
  return (<svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true"><defs>
    <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b9cc4a"/><stop offset="1" stopColor="#6d7a1a"/></linearGradient>
    <symbol id="rose" viewBox="0 0 100 100">
      <g fill="#eeb0bc" stroke="#d27f90" strokeWidth="1.5">{[0, 72, 144, 216, 288].map(a => (<ellipse key={a} cx="50" cy="26" rx="17" ry="24" transform={"rotate(" + a + " 50 50)"}/>))}</g>
      <circle cx="50" cy="50" r="22" fill="#f4c3cc" stroke="#d27f90" strokeWidth="1.5"/>
      <path d="M50 50m-8 0a8 8 0 1 1 8 8a13 13 0 1 1 -13-13" fill="none" stroke="#d27f90" strokeWidth="2" strokeLinecap="round"/>
    </symbol>
    <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff2b8"/><stop offset=".45" stopColor="#e6bd58"/><stop offset="1" stopColor="#b3832c"/></linearGradient>
    <radialGradient id="rg" cx=".35" cy=".3" r=".8"><stop offset="0" stopColor="#ff9aa8"/><stop offset=".5" stopColor="#d6244a"/><stop offset="1" stopColor="#7d0f2a"/></radialGradient>
    <radialGradient id="eg" cx=".35" cy=".3" r=".8"><stop offset="0" stopColor="#c9f5d8"/><stop offset=".5" stopColor="#3fbf86"/><stop offset="1" stopColor="#14664a"/></radialGradient>
    <symbol id="crown" viewBox="0 0 160 110">
      <path d="M16 88L12 30 29 58 46 18 63 50 80 6 97 50 114 18 131 58 148 30 144 88Z" fill="url(#cg)" stroke="#8f6420" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M22 84C30 66 40 66 46 76S60 80 66 70M138 84C130 66 120 66 114 76S100 80 94 70" fill="none" stroke="#a9772a" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M17 84L14 38 22 58Z M50 30L47 24 56 44Z M84 20L81 12 90 36Z" fill="#fff" opacity=".45"/>
      <rect x="12" y="84" width="136" height="20" rx="7" fill="url(#cg)" stroke="#8f6420" strokeWidth="3"/>
      <path d="M16 90H144" stroke="#fff" strokeOpacity=".5" strokeWidth="2"/>
      {[24, 38, 52, 108, 122, 136].map(x => (<circle key={x} cx={x} cy="95" r="3.4" fill="#fff" stroke="#c9b06a" strokeWidth="1"/>))}
      <ellipse cx="80" cy="66" rx="9" ry="12" fill="url(#rg)" stroke="#8f6420" strokeWidth="2.5"/>
      <ellipse cx="77" cy="61" rx="2.6" ry="3.6" fill="#fff" opacity=".7"/>
      <circle cx="52" cy="72" r="6" fill="url(#eg)" stroke="#8f6420" strokeWidth="2"/><circle cx="108" cy="72" r="6" fill="url(#eg)" stroke="#8f6420" strokeWidth="2"/>
      <rect x="71" y="88" width="18" height="12" rx="4" fill="url(#rg)" stroke="#8f6420" strokeWidth="2"/>
      <circle cx="12" cy="27" r="5" fill="#fff" stroke="#8f6420" strokeWidth="2"/><circle cx="46" cy="15" r="5" fill="#fff" stroke="#8f6420" strokeWidth="2"/>
      <circle cx="80" cy="4" r="7" fill="#fff" stroke="#8f6420" strokeWidth="2.5"/><circle cx="114" cy="15" r="5" fill="#fff" stroke="#8f6420" strokeWidth="2"/><circle cx="148" cy="27" r="5" fill="#fff" stroke="#8f6420" strokeWidth="2"/>
      <circle cx="80" cy="4" r="2.4" fill="#f4a6b4"/>
    </symbol>
    <symbol id="leaf" viewBox="0 0 100 50"><path d="M3 25C25 0 70 0 97 25 70 50 25 50 3 25Z" fill="#6d7a1a" stroke="#4a5a12"/><path d="M8 25H92" stroke="#a9bd3c" strokeWidth="2"/></symbol>
  </defs></svg>);
}

export function Garland({ cls }) {
  return (<svg viewBox="0 0 160 120" className={"gar absolute pointer-events-none " + cls} aria-hidden="true">
    <use href="#leaf" x="6" y="52" width="70" height="35" transform="rotate(35 40 70)"/>
    <use href="#leaf" x="50" y="6" width="70" height="35" transform="rotate(-20 85 24)"/>
    <use href="#leaf" x="62" y="62" width="60" height="30" transform="rotate(20 90 77)"/>
    <use href="#rose" x="-8" y="-8" width="78" height="78"/>
    <use href="#rose" x="58" y="14" width="46" height="46" style={{ filter: "hue-rotate(250deg) saturate(.6) brightness(1.1)" }}/>
    <use href="#rose" x="22" y="62" width="44" height="44" style={{ filter: "brightness(1.12) saturate(.7)" }}/>
  </svg>);
}

export const Corners = () => (<React.Fragment><Garland cls="-top-5 -left-5 w-28"/><Garland cls="-bottom-5 -right-5 w-28 rotate-180"/></React.Fragment>);

export function Frog({ size = 120, className = "" }) {
  return (<svg viewBox="0 0 200 170" width={size} className={"bob " + className} role="img" aria-label="Sapo con corona">
    <ellipse cx="38" cy="132" rx="30" ry="22" fill="#6d7a1a"/><ellipse cx="162" cy="132" rx="30" ry="22" fill="#6d7a1a"/>
    <ellipse cx="22" cy="152" rx="20" ry="7" fill="#8a912e"/><ellipse cx="178" cy="152" rx="20" ry="7" fill="#8a912e"/>
    <ellipse cx="100" cy="112" rx="64" ry="46" fill="url(#fg)"/>
    <ellipse cx="100" cy="128" rx="40" ry="28" fill="#d9dca6"/>
    <ellipse cx="68" cy="156" rx="22" ry="8" fill="#8a912e"/><ellipse cx="132" cy="156" rx="22" ry="8" fill="#8a912e"/>
    <circle cx="62" cy="96" r="7" fill="#58571c" opacity=".5"/><circle cx="142" cy="102" r="6" fill="#58571c" opacity=".5"/>
    <ellipse cx="100" cy="80" rx="60" ry="40" fill="url(#fg)"/>
    <circle cx="62" cy="52" r="21" fill="url(#fg)"/><circle cx="138" cy="52" r="21" fill="url(#fg)"/>
    <circle cx="62" cy="52" r="15" fill="#fff"/><circle cx="138" cy="52" r="15" fill="#fff"/>
    <g className="blink"><circle cx="64" cy="54" r="8" fill="#2b2a0e"/><circle cx="136" cy="54" r="8" fill="#2b2a0e"/><circle cx="67" cy="50" r="2.6" fill="#fff"/><circle cx="139" cy="50" r="2.6" fill="#fff"/></g>
    <circle cx="40" cy="90" r="8" fill="#f0a3b1" opacity=".7"/><circle cx="160" cy="90" r="8" fill="#f0a3b1" opacity=".7"/>
    <path d="M70 94Q100 116 130 94" fill="none" stroke="#3a4410" strokeWidth="3.5" strokeLinecap="round"/>
    <circle cx="94" cy="76" r="2" fill="#3a4410"/><circle cx="106" cy="76" r="2" fill="#3a4410"/>
    <path d="M76 36L82 12L93 27L100 6L107 27L118 12L124 36Z" fill="#e2b957" stroke="#9a7430" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="100" cy="24" r="4" fill="#d6405e"/><circle cx="84" cy="30" r="2.6" fill="#7fd6c2"/><circle cx="116" cy="30" r="2.6" fill="#7fd6c2"/>
  </svg>);
}

export function Petals({ n = 14 }) {
  const list = useMemo(() => Array.from({ length: n }, () => ({ left: Math.random() * 100 + "%", "--t": 6 + Math.random() * 6 + "s", "--dl": -Math.random() * 8 + "s", "--x": (Math.random() - .5) * 160 + "px" })), [n]);
  return list.map((st, i) => (<span key={i} className="petal" style={st} />));
}

export function Fireflies({ n = 16 }) {
  const list = useMemo(() => Array.from({ length: n }, () => ({
    left: Math.random() * 100 + "%", top: Math.random() * 100 + "%",
    "--t": 3 + Math.random() * 4 + "s", "--x": (Math.random() - .5) * 60 + "px", "--y": (Math.random() - .5) * 60 + "px" })), [n]);
  return list.map((st, i) => (<span key={i} className="fly" style={st} />));
}

export function Crown({ size = 60, className = "" }) {
  return (<svg viewBox="0 0 160 110" width={size} className={"block bob " + className} style={{ filter: "drop-shadow(0 3px 5px rgba(0,0,0,.3))" }} aria-hidden="true"><use href="#crown"/></svg>);
}

export function FlowerRow() {
  const lav = { filter: "hue-rotate(250deg) saturate(.6) brightness(1.1)" };
  return (<Reveal variant="up" className="max-w-[420px] mx-auto px-4 pt-6"><svg viewBox="0 0 360 120" className="w-full" aria-hidden="true">
    <use href="#leaf" x="20" y="64" width="70" height="35" transform="rotate(-20 55 82)"/>
    <use href="#leaf" x="90" y="76" width="60" height="30" transform="rotate(15 120 91)"/>
    <use href="#leaf" x="210" y="76" width="60" height="30" transform="rotate(-15 240 91)"/>
    <use href="#leaf" x="270" y="64" width="70" height="35" transform="rotate(20 305 82)"/>
    <use href="#rose" x="4" y="30" width="72" height="72"/>
    <use href="#rose" x="70" y="52" width="50" height="50" style={lav}/>
    <use href="#crown" x="116" y="8" width="128" height="88" style={{ filter: "drop-shadow(0 0 8px rgba(246,220,132,.7))" }}/>
    <use href="#rose" x="240" y="52" width="50" height="50" style={lav}/>
    <use href="#rose" x="284" y="30" width="72" height="72"/>
  </svg></Reveal>);
}

