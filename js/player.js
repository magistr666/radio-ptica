// ══════════════════════════════════════════════════════════
//  Радио «Птица» — плеер
//  Поток вещания: myradio24 (https://myradio24.org/25095)
// ══════════════════════════════════════════════════════════

const STREAM_URL = 'https://myradio24.org/25095';

const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const statusText = document.getElementById('statusText');
const nowPlaying = document.getElementById('nowPlaying');

audio.src = STREAM_URL;

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