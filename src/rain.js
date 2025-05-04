// src/rain.js
let animationFrameId;

export function startRain() {
  const canvas = document.getElementById('vmCanvas');
  const ctx = canvas.getContext('2d');

  // Canvas auf Fenstergröße setzen
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Zeichen für den Matrix-Effekt
  const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array.from({ length: columns }, () => Math.random() * canvas.height / fontSize);

  function draw() {
    // Leicht transparentes Schwarz zum 'Nachziehen'
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < columns; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.fillText(text, x, y);

      // Reset und zufällige Geschwindigkeit
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += 0.5 + Math.random();
    }

    animationFrameId = requestAnimationFrame(draw);
  }

  canvas.style.display = 'block';
  draw();
}

export function stopRain() {
  cancelAnimationFrame(animationFrameId);
  const canvas = document.getElementById('vmCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.display = 'none';
}
