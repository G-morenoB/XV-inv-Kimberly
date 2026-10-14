import React, { useState, useEffect, useMemo } from "react";

let burst = () => {};

export function Magic() {
  const ref = React.useRef(null);
  useEffect(() => {
    const c = ref.current, ctx = c.getContext("2d"); let ps = [], raf = 0;
    const fit = () => { c.width = innerWidth; c.height = innerHeight; }; fit(); addEventListener("resize", fit);
    const cols = ["#ffe9a3", "#ffffff", "#f0b4bf", "#c9a24f", "#c3a8e8"];
    const star = (x, y, r) => { ctx.beginPath(); for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4, d = i % 2 ? r * .35 : r; ctx.lineTo(x + Math.cos(a) * d, y + Math.sin(a) * d); } ctx.closePath(); ctx.fill(); };
    const loop = () => {
      ctx.clearRect(0, 0, c.width, c.height); ps = ps.filter(p => p.l > 0);
      for (const p of ps) { p.x += p.vx; p.y += p.vy; p.vy += .04; p.vx *= .99; p.l -= 1; ctx.globalAlpha = Math.max(0, p.l / p.m); ctx.fillStyle = p.c; const r = p.r * (.6 + .4 * Math.sin(p.l * .3)); star(p.x, p.y, r); ctx.globalAlpha *= .3; star(p.x, p.y, r * 1.8); ctx.globalAlpha = 1; }
      ctx.globalAlpha = 1; raf = ps.length ? requestAnimationFrame(loop) : 0;
    };
    burst = (x, y) => {
      if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
      for (let i = 0; i < 70; i++) { const a = Math.random() * 6.283, s = 1 + Math.random() * 7, m = 50 + Math.random() * 40; ps.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 1.5, r: 3 + Math.random() * 7, l: m, m, c: cols[i % cols.length] }); }
      if (!raf) raf = requestAnimationFrame(loop);
    };
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", fit); };
  }, []);
  return (<canvas ref={ref} className="fixed inset-0 z-30 pointer-events-none" aria-hidden="true" />);
}

export function magic(e) {
  const r = e.currentTarget.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2);
  setTimeout(() => burst(innerWidth / 2, innerHeight * .3), 800);
  setTimeout(() => burst(innerWidth * .5, innerHeight * .5), 1100);
}

export function sparkle(x, y) { burst(x, y); }
