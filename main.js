// MODIFY ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [];
for (i = 0; i < 100; i++) {
  myArray.push(300);
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  let barWidth = cnv.width / myArray.length;

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Bar Graph
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "grey";
  for (let i = 0; i < myArray.length; i++) {
    ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

// Key events
document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(event) {
  console.log(event.code);

  if (event.code == "Space") {
    for (i = 0; i < myArray.length; i++) {
      myArray[i] += Math.random() * 10 - 5;
      if (myArray[i] < 200) {
        myArray[i] += 5;
      } else if (myArray[i] > 400) {
        myArray[i] -= 5;
      }
    }
  } else if (event.code == "KeyR") {
    for (i = 0; i < myArray.length; i++) {
      myArray[i] = 300;
    }
  }
}
