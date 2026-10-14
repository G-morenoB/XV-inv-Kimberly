# Invitación XV años – Kimberly Aylinn Resendiz Pedraza

React 18 + Vite + Tailwind CSS 3. La invitación muestra **tal cual** las imágenes de la clienta.

## Cómo funciona

1. **Portada** (`Portada.jsx`): imagen de la clienta con el botón "Abrir invitación" dentro de su etiqueta blanca.
2. Al abrir suena la música (botón de pausa arriba a la derecha) y aparece la **invitación** (imagen 1).
3. Debajo: **contador**, **enlaces de ubicación** y el **Pase Familiar** (imagen 2).

## Uso rápido

```bash
npm install     # solo la primera vez
npm run dev     # prueba local en http://localhost:5173
npm run build   # genera dist/ para publicar
```

## Dónde cambiar cosas

- **Ubicaciones:** `src/config.js` (`LINKS`). Pon ahí el enlace exacto de Google Maps de la iglesia y del salón
  (en Google Maps: Compartir > Copiar vínculo).
- **Fecha del contador:** `src/config.js` (`EVENT`).
- **Imágenes:** `src/assets/` (`portada.webp`, `invitacion.webp`, `pase-familiar.webp`). Si cambias una por otra con
  distinto tamaño, actualiza `SIZE` (y `BOTON` si cambia la etiqueta de la portada) en `src/config.js`.
- **Canción:** `src/lib/music.js` y `src/lib/musica.mp3`.
- Las imágenes de la invitación y del pase están en formato WebP sin pérdida, idénticas a los originales.
