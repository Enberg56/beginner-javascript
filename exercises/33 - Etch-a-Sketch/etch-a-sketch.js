console.log('hello');
// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const shakeButton = document.querySelector('.shake');
const ctx = canvas.getContext('2d');
const MOVE_AMOUNT = 100;
const COLLOR_CHANGER = 10;
let hue = 0;

console.dir(canvas);
// set up canvas for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '100';
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

// write a draw function
const { width, height } = canvas;
console.log(width, height);
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// remove or shake function

// write a handler for the keys

function draw({ key }) {
  hue += COLLOR_CHANGER;
  console.log(key);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });

    console.log(e.key);
  }
}

// clean on shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function () {
      console.log('Done the shake!');
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// listen for arrow keys

window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);
