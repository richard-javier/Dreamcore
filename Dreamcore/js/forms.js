// forms.js
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const mensaje = document.getElementById("mensajeExito");

  if (formulario && mensaje) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simula un pequeño "envío fantasma"
      setTimeout(() => {
        mensaje.classList.add("visible");
        formulario.reset();
      }, 500);
    });
  }
});
