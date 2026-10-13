import musica from "./musica.mp3";

const audio = new Audio(musica);
audio.loop = true;
audio.volume = 0.6;
audio.preload = "auto"; // empieza a descargar al cargar la página, para que suene al instante
audio.load();

export const Music = {
  start() { return audio.play().catch(() => {}); },
  pause() { audio.pause(); },
  resume() { audio.play().catch(() => {}); },
};