import portada from "./assets/portada.webp";
import invitacion from "./assets/invitacion1.webp";
import pase from "./assets/pase-familiar.webp";
import inicio from "./assets/inicio.webp";

// Imágenes de la clienta (no se modifican). Medidas en píxeles [ancho, alto].
export const IMG = { portada, invitacion, pase, inicio };
export const SIZE = { portada: [928, 1152], invitacion: [842, 1264], pase: [880, 1173], inicio: [1451, 2576] };

// Posición del botón "Abrir invitación" sobre la etiqueta blanca de la portada (en % de la imagen)
export const BOTON = { left: 25.9, top: 41.8, width: 48.7, height: 7.8 };

// Fecha del contador regresivo (año, mes 0-11, día, hora, minutos)
export const EVENT = new Date(2026, 11, 18, 19, 0, 0);

// Enlaces de ubicación. Para que lleven al punto exacto, abre el lugar en Google Maps,
// pulsa "Compartir" > "Copiar vínculo" y pega ese enlace en lugar del que está aquí.
export const LINKS = {
  recepcion: "https://maps.app.goo.gl/ohCmSdLb9BrstXSm8",
};
