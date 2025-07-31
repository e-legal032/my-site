export default function startBitRain(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = canvas.parentElement.offsetHeight;

  const letters = ["0", "1"];
  const fontSize = 18;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "#050d14"; // fondo editorial
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ccff"; // azul neón narrativo
    ctx.font = `${fontSize}px monospace`;
    ctx.shadowColor = "#00ccff";
    ctx.shadowBlur = 10;

    drops.forEach((y, i) => {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, y * fontSize);

      if (y * fontSize > canvas.height && Math.random() > 0.985) {
        drops[i] = 0;
      }
      drops[i]++;
    });
  }

  setInterval(draw, 160);
}
