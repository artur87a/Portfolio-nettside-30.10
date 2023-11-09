const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let lines = [];
let maxLines = 110; // Set your desired maximum number of lines
const colors = ["#A0DDFF", "#758ECD", "#C1CEFE", "#624CAB", "#45CB85"];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (canvas.width < 599) {
    maxLines = 40;
  } else {
    maxLines = 110;
  }

  if (lines.length > maxLines) {
    // Remove excess lines
    lines.splice(maxLines);
  }
  while (lines.length < maxLines) {
    lines.push(createLine());
  }
}

function createLine() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2,
    length: Math.random() * 100 + 50,
    color: colors[Math.floor(Math.random() * colors.length)],
  };
}

function drawLine(line) {
  ctx.strokeStyle = line.color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(line.x, line.y);
  ctx.lineTo(line.x + line.dx * line.length, line.y + line.dy * line.length);
  ctx.stroke();
}

function updateLine(line) {
  line.x += line.dx;
  line.y += line.dy;

  if (line.x < 0 || line.x > canvas.width) {
    line.dx = -line.dx;
  }
  if (line.y < 0 || line.y > canvas.height) {
    line.dy = -line.dy;
  }

  drawLine(line);
}

function init() {
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  for (let i = 0; i < 100; i++) {
    lines.push(createLine());
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  lines.forEach((line) => {
    updateLine(line);
  });
}

init();
animate();

// /*EFFECT av tilt left */
// const section = document.querySelector('.projects-section');
// const element = section.querySelector('.tilt-in-left-1');

// let inViewport = false;

// function checkViewport() {
//   const rect = section.getBoundingClientRect();
//   inViewport = rect.top < window.innerHeight && rect.bottom >= 0;
//   if (inViewport) {
//     element.classList.add('tilt-in-left-1');
//   } else {
//     element.classList.remove('tilt-in-left-1');
//   }
// }

// checkViewport();

// window.addEventListener('scroll', checkViewport);
// /*ends here*/

const section = document.querySelector('.projects-section');
const element = section.querySelector('.tilt-in-left-1');
let inViewport = false;

function checkViewport() {
  const rect = section.getBoundingClientRect();
  const isInSectionViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

  if (isInSectionViewport && !inViewport) {
    // Element enters the viewport
    element.classList.add('tilt-in-left-1');
    inViewport = true;
  } else if (!isInSectionViewport && inViewport) {
    // Element leaves the viewport
    element.classList.remove('tilt-in-left-1');
    inViewport = false;
  }
}

checkViewport();

window.addEventListener('scroll', checkViewport);