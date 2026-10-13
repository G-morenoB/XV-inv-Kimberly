import React, { useState, useEffect, useMemo } from "react";

export function MusicBtn({ on, toggle }) {
  return (<button onClick={toggle} aria-label={on ? "Pausar música" : "Reproducir música"}
    className="fixed right-3 z-40 w-11 h-11 rounded-full grid place-items-center border-2 border-[var(--gold)] text-[var(--lime)] backdrop-blur focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[var(--gold)]"
    style={{ top: "calc(env(safe-area-inset-top,0px) + 12px)", background: "rgba(10,28,46,.72)", boxShadow: "0 0 14px rgba(169,189,60,.4)" }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{on ? (<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>) : (<path d="M7 4l13 8-13 8z"/>)}</svg>
  </button>);
}

