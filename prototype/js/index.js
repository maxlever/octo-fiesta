 var canvas, ctx, flag = false, prevX = 0, currX = 0, prevY = 0, currY = 0, dot_flag = false;

 var color = "black", lineWidth = 2;

function init() {
 canvas = document.getElementById("can");
 ctx = canvas.getContext("2d");
 w = canvas.width;
 h = canvas.height;

}

// //figure out which item is selected
// function selectedItem(obj) {
//   switch (obj.id) {
//     case "pencil":
//       pencilSelected();
//       break;
//     case "eraser":
//       eraserSelected();
//       break;
//     case "select":
//       break;
//     case "paint-bucket":
//       break;
//     case "text":
//       break;
//     case "diagonal-line":
//       break;
//   }
// }

//draw function
function pencilSelected() {
  console.log("pencil is selected");
  canvas.addEventListener("mousemove", function (e) {
      findxy("move", e)
  }, false);
  canvas.addEventListener("mousedown", function (e) {
      findxy("down", e)
  }, false);
  canvas.addEventListener("mouseup", function (e) {
      findxy("up", e)
  }, false);
  canvas.addEventListener("mouseout", function (e) {
      findxy("out", e)
  }, false);
}

//find where mouse is
function findxy(res, e) {
 var rect = canvas.getBoundingClientRect();

   if (res == "down") {
       prevX = currX;
       prevY = currY;
       currX = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
       currY = (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;

       flag = true;
       dot_flag = true;
       if (dot_flag) {
           ctx.beginPath();
           ctx.fillStyle = color;
           ctx.fillRect(currX, currY, 2, 2);
           ctx.closePath();
           dot_flag = false;
       }
   }
   if (res == "up" || res == "out") {
       flag = false;
   }
   if (res == "move") {
       if (flag) {
           prevX = currX;
           prevY = currY;
           currX = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
           currY = (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
           draw();
       }
   }
}


function draw() {
   ctx.beginPath();
   ctx.moveTo(prevX, prevY);
   ctx.lineTo(currX, currY);
   ctx.strokeStyle = color;
   ctx.lineWidth = lineWidth;
   ctx.stroke();
   ctx.closePath();
}

//eraser function
function eraserSelected() {
  console.log("eraser is selected");
  color = canvas.style.backgroundColor;
  if(color === "") {
    console.log("background is white");
    color = "white";
  }
  else {
    color = canvas.style.backgroundColor;
    console.log("background is not white");

  }

  canvas.addEventListener("mousemove", function (e) {
      findxy("move", e)
  }, false);
  canvas.addEventListener("mousedown", function (e) {
      findxy("down", e)
  }, false);
  canvas.addEventListener("mouseup", function (e) {
      findxy("up", e)
  }, false);
  canvas.addEventListener("mouseout", function (e) {
      findxy("out", e)
  }, false);
}

//do we need this?
function color(obj) {
  switch (obj.id) {
    case "green":
      color = "green";
      break;
    case "blue":
      color = "blue";
      break;
    case "red":
      color = "red";
      break;
    case "yellow":
      color = "yellow";
      break;
    case "orange":
      color = "orange";
      break;
    case "black":
      color = "black";
      break;
  }
}
