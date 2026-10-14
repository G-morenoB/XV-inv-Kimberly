import React, { useState, useEffect } from "react";
import { EVENT } from "../config";

export function Contador() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const s = Math.max(0, Math.floor((EVENT - now) / 1000));
  const items = [[Math.floor(s / 86400), "días"], [Math.floor(s % 86400 / 3600), "horas"], [Math.floor(s % 3600 / 60), "min"], [s % 60, "seg"]];
  return (
    <div className="papel text-center px-4 py-6">
      <p className="font-script text-4xl leading-tight text-[#5e7656]">{s > 0 ? "Faltan para mis XV años" : "¡Hoy es el gran día!"}</p>
      {s > 0 && (
        <div className="flex justify-center gap-2.5 mt-3">
          {items.map(([n, l]) => (
            <div key={l} className="min-w-[64px] py-2 px-1 rounded-xl border border-[#c9a24f] bg-[#5e7656]/10">
              <b className="block text-3xl leading-tight text-[#5e7656]">{n}</b>
              <span className="text-base text-[#7a6a45]">{l}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
