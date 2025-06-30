const intro = document.getElementById('introScreen');
const main = document.getElementById('mainContent');
const sonido = document.getElementById('ambiente');

document.addEventListener('keydown', () => {
  intro.style.display = 'none';
  main.classList.remove('hidden');
  sonido.play();
});
