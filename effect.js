const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lines = [];
const colors = ['#FF5733', '#E22D60', '#9E004F', '#600080', '#283593'];

const createLine = () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  dx: (Math.random() - 0.5) * 2,
  dy: (Math.random() - 0.5) * 2,
  length: Math.random() * 100 + 50,
  color: colors[Math.floor(Math.random() * colors.length)],
});

const drawLine = (line) => {
  ctx.strokeStyle = line.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(line.x, line.y);
  ctx.lineTo(line.x + line.dx * line.length, line.y + line.dy * line.length);
  ctx.stroke();
};

const updateLine = (line) => {
  line.x += line.dx;
  line.y += line.dy;

  if (line.x < 0 || line.x > canvas.width) {
    line.dx = -line.dx;
  }
  if (line.y < 0 || line.y > canvas.height) {
    line.dy = -line.dy;
  }

  drawLine(line);
};

const init = () => {
  for (let i = 0; i < 100; i++) {
    lines.push(createLine());
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  lines.forEach((line) => {
    updateLine(line);
  });
};

init();
animate();