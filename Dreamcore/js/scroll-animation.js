// scroll-animation.js
document.addEventListener("DOMContentLoaded", () => {
  const entradas = document.querySelectorAll(".entrada-diario");

  const mostrarEntrada = (entrada) => {
    const top = entrada.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 50) {
      entrada.classList.add("visible");
    }
  };

  const manejarScroll = () => {
    entradas.forEach(mostrarEntrada);
  };

  entradas.forEach((entrada) => entrada.classList.add("fade-in"));
  window.addEventListener("scroll", manejarScroll);
  manejarScroll(); // Llamada inicial por si ya hay entradas en pantalla
});
