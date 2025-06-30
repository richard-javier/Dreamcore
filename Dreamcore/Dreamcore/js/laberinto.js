function navegar(pagina) {
  switch (pagina) {
    case 'archivo':
      window.location.href = '../archivo-onirico/archivo.html';
      break;
    case 'diario':
      window.location.href = '../diario/diario.html';
      break;
    case 'contacto':
      window.location.href = '../contacto/contacto.html';
      break;
  }
}

function navegarAleatorio() {
  const caminos = [
    '../archivo-onirico/archivo.html',
    '../diario/diario.html',
    '../contacto/contacto.html',
    '../home/home.html'
  ];
  const elegido = caminos[Math.floor(Math.random() * caminos.length)];
  const texto = document.getElementById('laberintoTexto');
  texto.innerText = 'Te adentras en lo desconocido...';
  setTimeout(() => {
    window.location.href = elegido;
  }, 2000);
}
