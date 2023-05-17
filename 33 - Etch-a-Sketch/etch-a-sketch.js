// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 20;


// Set up our canvas for drawing
// Make a variable called height and width from the same properties on our canvas.
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

// Create random x and y starting points on the canvas
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;


// Write a draw function
function handleKey(e) {
    if (e.key.includes("Arrow")) {
        e.preventDefault();
        draw({
            key: e.key
        });
        console.log("HANDLING KEY");
    }
}

window.addEventListener('keydown', handleKey);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


// function draw
function draw({ key }) {
    // increment the hue
    hue += 10;
    console.log(hue);
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    console.log(key);
    // start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move our x and y values depending on what the user did
    switch(key) {
        case 'ArrowUp':
            y = y - MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// Write a handler for the keys

// Clear or shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function() {
        console.log("done the shake!");
        canvas.classList.remove('shake');
    }, { once: true });
}

// Listen for arrow keys
shakebutton.addEventListener('click', clearCanvas);