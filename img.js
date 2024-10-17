const imageLoader = document.getElementById('imageLoader');
const imageCanvas = document.getElementById('imageCanvas');
const imageCtx = imageCanvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');

let isDrawing = false;
let startX, startY;

imageLoader.addEventListener('change', handleImage);

function handleImage(e) {
  const reader = new FileReader();
  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
      imageCtx.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
    }
    img.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);
}

imageCanvas.addEventListener('mousedown', function(e) {
    isDrawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
  });
  
  imageCanvas.addEventListener('mousemove', function(e) {
    if (isDrawing) {
      draw(e.offsetX, e.offsetY);
    }
  });
  
  imageCanvas.addEventListener('mouseup', function() {
    isDrawing = false;
  });
  
  function draw(x, y) {
    imageCtx.strokeStyle = colorPicker.value;
    imageCtx.lineWidth = brushSize.value;
    imageCtx.lineCap = 'round';
  
    imageCtx.beginPath();
    imageCtx.moveTo(startX, startY);
    imageCtx.lineTo(x, y);
    imageCtx.stroke();
  
    startX = x;
    startY = y;
  }

  function clearCanvas() {
    imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
  }

  function saveImage() {
    const link = document.createElement('a');
    link.href = imageCanvas.toDataURL('image/png');
    link.download = 'manipulated-image.png';
    link.click();
  }