// nightmode.js

// Crear botón flotante
const toggleButton = document.createElement('button');
toggleButton.innerText = '🌙';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '1rem';
toggleButton.style.right = '1rem';
toggleButton.style.padding = '1rem';
toggleButton.style.background = '#000';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '50%';
toggleButton.style.fontSize = '2rem';
toggleButton.style.cursor = 'pointer';
toggleButton.style.zIndex = '10000';
document.body.appendChild(toggleButton);

// Cambiar modo oscuro
let modoOscuro = false;
toggleButton.addEventListener('click', () => {
  modoOscuro = !modoOscuro;
  document.body.style.backgroundColor = modoOscuro ? '#0b0f1a' : '';
  document.body.style.color = modoOscuro ? '#ccc' : '';
  toggleButton.innerText = modoOscuro ? '☀️' : '🌙';

  // Cambiar otros estilos comunes
  const secciones = document.querySelectorAll('header, footer, main, .formulario, .entrada-diario');
  secciones.forEach(sec => {
    sec.style.backgroundColor = modoOscuro ? '#111' : '';
    sec.style.color = modoOscuro ? '#ccc' : '';
  });
});
