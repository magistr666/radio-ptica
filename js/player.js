// ══════════════════════════════════════════════════════════
//  Радио птица — плеер
//  ⚠ Замените STREAM_URL на адрес вашего потокового вещания
// ══════════════════════════════════════════════════════════

const STREAM_URL = '';  // пример: 'https://radio.example.com/stream.mp3'

const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const statusText = document.getElementById('statusText');
const nowPlaying = document.getElementById('nowPlaying');

if (!STREAM_URL) {
  playBtn.disabled = true;
  playBtn.textContent = '⚙ Нет потока';
  statusText.textContent = 'Поток не настроен';
} else {
  audio.src = STREAM_URL;
}

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch(() => {
      statusText.textContent = 'Ошибка воспроизведения';
    });
    playBtn.textContent = '⏸ Пауза';
    playBtn.classList.add('playing');
    statusText.textContent = 'Сейчас в эфире';
  } else {
    audio.pause();
    playBtn.textContent = '▶ Слушать';
    playBtn.classList.remove('playing');
    statusText.textContent = 'На паузе';
  }
});

audio.addEventListener('error', () => {
  statusText.textContent = 'Ошибка потока';
  playBtn.textContent = '▶ Слушать';
  playBtn.classList.remove('playing');
});

audio.addEventListener('playing', () => {
  playBtn.textContent = '⏸ Пауза';
  playBtn.classList.add('playing');
  statusText.textContent = 'Сейчас в эфире';
});

audio.addEventListener('pause', () => {
  if (!audio.ended) {
    playBtn.textContent = '▶ Слушать';
    playBtn.classList.remove('playing');
    statusText.textContent = 'На паузе';
  }
});

// Пример метаданных (заглушка)
const trackTitles = [
  'The Birds — Morning Flight',
  'Sunset Feathers — Chill Mix',
  'Sparrow — Breeze',
  'Radio птица — Легкий эфир',
  'Nightingale — Nocturne',
];
let trackIndex = 0;

setInterval(() => {
  trackIndex = (trackIndex + 1) % trackTitles.length;
  nowPlaying.textContent = trackTitles[trackIndex];
}, 15000);