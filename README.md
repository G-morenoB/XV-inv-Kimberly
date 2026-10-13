# Invitación XV años – Kimberly Aylindiz

Proyecto en **React 18 + Vite + Tailwind CSS 3**.

## Uso rápido

Necesitas tener [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install        # instala dependencias (solo la primera vez)
npm run dev        # servidor local en http://localhost:5173
npm run build      # genera la carpeta dist/ lista para subir
npm run preview    # prueba local de la versión final
```

## Publicarla

Sube el contenido de `dist/` a cualquier hosting estático (Netlify, Vercel,
GitHub Pages, Cloudflare Pages o tu propio hosting). Está configurada con rutas
relativas, así que funciona también dentro de una subcarpeta.
En Netlify basta con arrastrar la carpeta `dist` a https://app.netlify.com/drop

## Estructura

```
src/
  App.jsx                  flujo principal (abrir invitación, secciones)
  config.js                imágenes, fecha del contador y enlaces de mapas
  index.css                estilos globales y animaciones
  lib/music.js             vals de caja de música generado con Web Audio
  components/
    Cover.jsx              portada con el botón "Abrir invitación"
    Hero.jsx               castillo, nombre, fecha y contador
    Sections.jsx           padres, misa, recepción, mapa, Pase Familiar
    Decor.jsx              sapo, rosas, corona, pétalos, luciérnagas
    Magic.jsx              estrellitas del efecto mágico
    MusicBtn.jsx           botón de pausa (arriba a la derecha)
  assets/castle.jpg        imagen del castillo
```

## Dónde cambiar cosas

- **Fecha del contador:** `src/config.js` (`EVENT`).
- **Nombres, horarios y textos:** `src/components/Sections.jsx`, `Cover.jsx` y `Hero.jsx`.
- **Mapa y botones de ubicación:** `MapCard` y `Place` en `Sections.jsx`.
  El dibujo es ilustrativo. Para un mapa real, agrega dentro de `MapCard`
  un `<iframe>` con el enlace "Insertar mapa" de Google Maps
  (funciona en tu propio hosting).
- **Castillo u otras imágenes:** reemplaza `src/assets/castle.jpg` o importa
  nuevas en `src/config.js`.
- **Canción:** hoy suena una melodía original sintetizada en `src/lib/music.js`.
  Para usar tu propia canción, pon el MP3 en `public/musica.mp3` y reemplaza
  `Music` por un objeto con `start`, `pause` y `resume` que use
  `new Audio("./musica.mp3")` (con `loop = true`).

## Animaciones al deslizar

- `src/components/Reveal.jsx`: envuelve cualquier elemento y lo anima al entrar en pantalla.
  Ejemplo: `<Reveal variant="zoom" delay={.3}>...</Reveal>`.
  Variantes: `up`, `left`, `right`, `zoom`, `drop`, `pop`, `unroll` (pergamino que se abre) y `hop` (salto).
- `src/components/Progress.jsx`: barra de progreso arriba.
- `src/components/Hero.jsx`: parallax del castillo y texto que se desvanece al bajar.
- `src/components/Sections.jsx`: el mapa dibuja la ruta y los pines caen; el Pase Familiar lanza estrellitas.
- Los estilos de estas animaciones están al final de `src/index.css`.
- Si la persona tiene activado "reducir movimiento" en su dispositivo, las animaciones se omiten.
