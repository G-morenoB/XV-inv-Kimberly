import React from "react";

// Botón de música (arriba a la derecha)
export function MusicBtn({ on, toggle }) {
  return (
    <button onClick={toggle} aria-label={on ? "Pausar música" : "Reproducir música"}
      className="fixed right-3 z-40 w-11 h-11 rounded-full grid place-items-center border-2 border-[#c9a24f] text-[#f3e9cc] backdrop-blur focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#c9a24f]"
      style={{ top: "calc(env(safe-area-inset-top,0px) + 12px)", background: "rgba(29,43,33,.8)", boxShadow: "0 0 14px rgba(201,162,79,.35)" }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {on ? <path d="M6 4h4v16H6zM14 4h4v16h-4z" /> : <path d="M7 4l13 8-13 8z" />}
      </svg>
    </button>
  );
}
