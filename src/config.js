import portada from "./assets/portada.webp";
import invitacion from "./assets/invitacion.webp";
import pase from "./assets/pase-familiar.webp";

// Imágenes de la clienta (no se modifican). Medidas en píxeles [ancho, alto].
export const IMG = { portada, invitacion, pase };
export const SIZE = { portada: [928, 1152], invitacion: [842, 1264], pase: [880, 1173] };

// Posición del botón "Abrir invitación" sobre la etiqueta blanca de la portada (en % de la imagen)
export const BOTON = { left: 25.9, top: 41.8, width: 48.7, height: 7.8 };

// Fecha del contador regresivo (año, mes 0-11, día, hora, minutos)
export const EVENT = new Date(2026, 11, 18, 19, 0, 0);

// Enlaces de ubicación. Para que lleven al punto exacto, abre el lugar en Google Maps,
// pulsa "Compartir" > "Copiar vínculo" y pega ese enlace en lugar del que está aquí.
const buscar = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
export const LINKS = {
  misa: buscar("Iglesia San Miguel Arcángel"),
  recepcion: buscar("AD HOUSE salón de fiestas"),
};
