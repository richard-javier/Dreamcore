document.querySelectorAll('.boton--primario').forEach(boton => {
  const hoverSound = new Audio('../sonido/hover.mp3');
  hoverSound.volume = 0.3; // no tan fuerte

  boton.addEventListener('mouseenter', () => {
    boton.classList.add('vibrar');
    hoverSound.currentTime = 0;
    hoverSound.play();
  });

  boton.addEventListener('mouseleave', () => {
    boton.classList.remove('vibrar');
  });
});
