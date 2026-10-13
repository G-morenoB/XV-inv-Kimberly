import castle from "./assets/castle.jpg";

// Imágenes (agrega aquí las nuevas: import x from "./assets/x.png")
export const IMG = { castle };

// Fecha del contador regresivo (año, mes 0-11, día, hora, minutos)
export const EVENT = new Date(2026, 11, 18, 19, 0, 0);

// Enlace de Google Maps por nombre del lugar
export const maps = (q) =>
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
