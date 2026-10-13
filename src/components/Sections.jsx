import React, { useState, useEffect, useMemo } from "react";
import { Corners, Crown } from "./Decor";
import { maps } from "../config";
import { Reveal } from "./Reveal";
import { useInView } from "../lib/useScroll";
import { sparkle } from "./Magic";
import { Libelula } from "./Libelula";

export const Sec = ({ children, cls = "" }) => (<section className={"relative max-w-[520px] mx-auto px-5 py-10 text-center " + cls}>{children}</section>);

export const H = ({ children, dark }) => (<h3 className={"font-script text-5xl leading-tight mb-3 " + (dark ? "text-[#6d7a1a]" : "text-[var(--lime)]")}>{children}</h3>);

export function Place({ title, big, sub, q, extra }) {
  return (<Sec>{extra}<Reveal variant="unroll" className="parch relative px-5 py-8"><Corners />
    <H dark={true}>{title}</H>
    <p className="text-4xl font-semibold text-[#4a5a12] leading-tight">{big}</p>
    <p className="mt-1">{sub}</p>
    <a className="btn !text-lg !py-2.5 !px-6" target="_blank" rel="noopener" href={maps(q)}>Ver ubicación</a>
  </Reveal></Sec>);
}

export function MapCard() {
  const route = "https://www.google.com/maps/dir/?api=1&origin=" + encodeURIComponent("Iglesia San Miguel Arcángel") + "&destination=" + encodeURIComponent("AD HOUSE");
  const halo = { paintOrder: "stroke" };
  const [mref, seen] = useInView({ threshold: .3 });
  return (<Sec><Libelula pos="top-2 right-3" color="pink" from="right" size={72} delay={.5} /><Reveal variant="drop"><H>Cómo llegar</H></Reveal>
    <Reveal variant="zoom" className="parch relative p-3 overflow-hidden">
      <svg ref={mref} viewBox="0 0 360 280" className={"mapsvg w-full rounded " + (seen ? "in" : "")} role="img" aria-label="Mapa ilustrado de la iglesia a AD HOUSE">
        <rect width="360" height="280" fill="#efe9c8"/>
        <path d="M-10 210C60 170 110 250 190 215S320 150 370 190V290H-10Z" fill="#bcd9d6"/>
        <path d="M20 20h110v60H20zM240 30h100v55H240zM150 120h70v40h-70z" fill="#c4ca77" opacity=".75"/>
        <g fill="none" stroke="#fff" strokeWidth="12" strokeLinecap="round"><path d="M-10 100C80 90 150 110 370 90"/><path d="M110 -10C130 80 90 150 130 290"/><path d="M270 -10C250 70 290 150 260 290"/></g>
        <path pathLength="1" className="routeDraw" d="M90 62C90 110 190 90 215 150S270 190 285 215" fill="none" stroke="#6d7a1a" strokeWidth="4" strokeLinecap="round"/>
        <path className="route routeDash" d="M90 62C90 110 190 90 215 150S270 190 285 215" fill="none" stroke="#efe9c8" strokeWidth="1.6" strokeLinecap="round"/>
        <g transform="translate(90 62)"><g className="pin" style={{ "--dl": ".3s" }}><path d="M0 0C-22-22-22-46 0-46S22-22 0 0Z" fill="#6d7a1a"/><circle cy="-28" r="10" fill="#fff"/><path d="M0-36V-20M-6-31H6" stroke="#6d7a1a" strokeWidth="3"/></g></g>
        <g transform="translate(285 215)"><g className="pin" style={{ "--dl": "2.9s" }}><path d="M0 0C-22-22-22-46 0-46S22-22 0 0Z" fill="#c9a24f"/><circle cy="-28" r="10" fill="#fff"/><text y="-22" textAnchor="middle" fontSize="15" fill="#9a7430">★</text></g></g>
        <text x="110" y="40" fontSize="17" fontWeight="600" fill="#3f4217" stroke="#efe9c8" strokeWidth="4" className="mlabel" style={{ ...halo, "--dl": ".7s" }}>Iglesia San Miguel Arcángel</text>
        <text x="262" y="176" textAnchor="end" fontSize="17" fontWeight="600" fill="#3f4217" stroke="#efe9c8" strokeWidth="4" className="mlabel" style={{ ...halo, "--dl": "3.2s" }}>AD HOUSE</text>
        <text x="10" y="270" fontSize="12" fontStyle="italic" fill="#58571c">Mapa ilustrativo</text>
        <g transform="translate(330 40)"><path d="M0-16L7 6 0 1-7 6Z" fill="#58571c"/><text y="22" textAnchor="middle" fontSize="12" fill="#58571c">N</text></g>
      </svg>
      <div className="flex flex-wrap gap-x-3 justify-center pb-2">
        <a className="btn !text-lg !py-2 !px-5 !mt-3" target="_blank" rel="noopener" href={maps("Iglesia San Miguel Arcángel")}>Iglesia</a>
        <a className="btn !text-lg !py-2 !px-5 !mt-3" target="_blank" rel="noopener" href={maps("AD HOUSE")}>AD HOUSE</a>
        <a className="btn !text-lg !py-2 !px-5 !mt-3" target="_blank" rel="noopener" href={route}>Ruta</a>
      </div>
    </Reveal>
  </Sec>);
}

export function PaseFamiliar() {
  // estrellitas mágicas cuando la tarjeta aparece
  const boom = (el) => setTimeout(() => {
    const r = el.getBoundingClientRect();
    sparkle(r.left + r.width / 2, r.top + 70);
  }, 700);
  return (<Sec><Libelula pos="-top-2 right-1" color="teal" from="right" size={76} delay={1.2} /><Reveal variant="zoom" className="parch relative px-5 py-8" onShow={boom}><Corners />
    <Reveal variant="drop" delay={.5}><Crown size={84} className="mx-auto" /></Reveal>
    <Reveal variant="zoom" delay={.8} className="mx-auto mt-2 mb-4 px-4 py-3 rounded-lg border-2 border-[var(--gold)] text-[#f7f8e6]" style={{ background: "linear-gradient(#7d8c2a,#58671a)", boxShadow: "inset 0 0 0 3px rgba(255,255,255,.15)" }}>
      <h3 className="font-script text-5xl leading-tight">Pase Familiar</h3></Reveal>
    <Reveal variant="up" delay={1.1}><p className="font-script text-3xl text-[#4a5a12] leading-snug">Tu presencia es lo mejor regalo para mí.</p></Reveal>
    <Reveal variant="up" delay={1.3}><p className="mt-3">Mi mayor ilusión es compartir esta noche contigo. Si deseas hacerme un obsequio, te agradeceré que sea en efectivo, utilizando el sobre que encontrarás en la recepción.</p></Reveal>
    <Reveal variant="up" delay={1.5}><p className="font-script text-3xl text-[#6d7a1a] mt-4">¡Gracias por ser parte de mis XV años!</p></Reveal>
  </Reveal></Sec>);
}
