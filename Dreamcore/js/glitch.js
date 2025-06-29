// Efecto glitch animado para elementos con clase 'glitch-text'
document.querySelectorAll('.glitch-text').forEach(el => {
  const text = el.getAttribute('data-text');
  const chars = '█▓▒░<>/\\|!@#$%^&*()_+=-~';
  let iterations = 0;

  const glitch = () => {
    const glitchText = text.split('').map((char, i) => {
      if (i < iterations) return char;
      return chars[Math.floor(Math.random() * chars.length)];
    }).join('');

    el.innerText = glitchText;

    if (iterations < text.length) {
      iterations += 1 / 2;
      requestAnimationFrame(glitch);
    } else {
      el.innerText = text;
    }
  };

  el.addEventListener('mouseover', () => {
    iterations = 0;
    glitch();
  });
});
