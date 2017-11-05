 var canvas, ctx, flag = false, prevX = 0, currX = 0, prevY = 0, currY = 0, dot_flag = false;

 var color = "black", lineWidth = 2;

function init() {
 canvas = document.getElementById("can");
 ctx = canvas.getContext("2d");
 w = canvas.width;
 h = canvas.height;

}

//do we need this?
function changeColor(obj) {
  switch (obj.id) {
    case "green":
      color = "green";
      console.log("color is green");
      break;
    case "blue":
      color = "blue";
      console.log("color is blue");
      break;
    case "red":
      color = "red";
      console.log("color is red");
      break;
    case "yellow":
      color = "yellow";
      console.log("color is yellow");
      break;
    case "orange":
      color = "orange";
      console.log("color is orange");
      break;
    case "black":
      color = "black";
      console.log("color is black");
      break;
  }
}

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
  lineWidth = 3;
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

function selectSelected() {
  //TODO: finish this
}
function paintbucketSelected() {
  //TODO: finish this
}

function textSelected() {
  //TODO: finish this
  ctx.font = "20px Georgia";
  ctx.fillText("Hello World!", 10, 50);
}

function lineSelected() {
  console.log("line is selected");
  //TODO: finish this
}
