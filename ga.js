const animationCanvas = document.getElementById('animationCanvas');
const animationCtx = animationCanvas.getContext('2d');
let animationFrameId;
let xPos = 0;
let yPos = 200;
let xSpeed = 2;
let circleColor = document.getElementById('animationColor').value;

document.getElementById('animationColor').addEventListener('input', function() {
  circleColor = this.value;
});

document.getElementById('animationSpeed').addEventListener('input', function() {
  xSpeed = parseInt(this.value);
});

function animate() {
  animationCtx.clearRect(0, 0, animationCanvas.width, animationCanvas.height);

  animationCtx.beginPath();
  animationCtx.arc(xPos, yPos, 20, 0, Math.PI * 2);
  animationCtx.fillStyle = circleColor;
  animationCtx.fill();

  xPos += xSpeed;

  if (xPos > animationCanvas.width || xPos < 0) {
    xSpeed = -xSpeed;
  }

  animationFrameId = requestAnimationFrame(animate);
}

function startAnimation() {
  if (!animationFrameId) {
    animate();
  }
}

function stopAnimation() {
  cancelAnimationFrame(animationFrameId);
  animationFrameId = null;
}