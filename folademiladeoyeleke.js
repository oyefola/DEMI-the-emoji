let canvas = document.getElementById("canvasFace");
let ctx = canvas.getContext("2d");
let nosePosition = {
  x: 150,
  y: 175,
  r: 35,
};
let nosePositionClick = 0;
let chinPosition = {
  x: 150,
  y: 265,
  r: 35,
};
let chinPositionClick = 0;

canvas.height = 300;
canvas.width = 300;
ctx.scale(0.6, 0.75);

function drawFace() {
  // some parts of the hair
  ctx.beginPath();
  ctx.arc(250, 150, 140, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(120, 220, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.arc(130, 225, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(380, 200, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(380, 220, 10, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(370, 230, 10, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();

  // the headband
  ctx.arc(250, 170, 120, 0, 2 * Math.PI);
  ctx.fillStyle = "purple";
  ctx.fill();
  //the face
  ctx.beginPath();
  ctx.arc(250, 200, 120, 0, 2 * Math.PI, false);
  ctx.fillStyle = "rgb(66, 39, 5)";
  ctx.fill();

  // the hair
  ctx.beginPath();
  ctx.arc(250, 20, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(220, 20, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.beginPath();
  ctx.arc(190, 30, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(160, 45, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(130, 65, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.beginPath();
  ctx.arc(110, 90, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(100, 120, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 145, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 170, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(100, 190, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(110, 210, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(260, 20, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(280, 20, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(280, 25, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(280, 30, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(305, 25, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(330, 35, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(355, 50, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(380, 70, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(385, 100, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(395, 130, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(400, 155, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(390, 180, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(390, 180, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(390, 180, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(250, 90, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(220, 90, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(195, 100, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(275, 95, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(300, 100, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(135, 200, 30, Math.PI / 2, -Math.PI / 2, false);
  ctx.fillStyle = "rgb(66, 39, 5)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(135, 200, 15, Math.PI / 2, -Math.PI / 2, false);
  ctx.fillStyle = "rgb(38, 22, 3)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(365, 200, 30, Math.PI / 2, -Math.PI / 2, true);
  ctx.fillStyle = "rgb(66, 39, 5)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(365, 200, 15, Math.PI / 2, -Math.PI / 2, true);
  ctx.fillStyle = "rgb(38, 22, 3)";
  ctx.fill();
  //nose
  ctx.beginPath();
  ctx.arc(250, 230, 20, Math.PI / 2, -Math.PI / 2, true);
  ctx.strokeStyle = "rgb(38, 22, 3)";
  ctx.lineWidth = 5;
  ctx.stroke();
}

function neutralFace() {
  drawFace();
  // first eye
  ctx.beginPath();
  ctx.arc(180, 190, 30, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(38, 22, 3)";
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 190, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "rgb(125, 70, 4)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 190, 15, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(185, 180, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fill();
  // second eye
  ctx.beginPath();
  ctx.arc(320, 190, 30, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fillStyle = "white";
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(38, 22, 3)";
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(320, 190, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "rgb(125, 70, 4)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(320, 190, 15, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(325, 180, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fill();
  // right Eyebrow
  ctx.beginPath();
  ctx.moveTo(210, 145);
  ctx.lineTo(160, 140);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(20, 12, 3)";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(160, 135);
  ctx.lineTo(140, 155);
  ctx.lineTo(180, 137);
  ctx.fillStyle = "rgb(20, 12, 3)";
  ctx.fill();
  // left eyebrow
  ctx.beginPath();
  ctx.moveTo(290, 145);
  ctx.lineTo(335, 140);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(20, 12, 3)";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(335, 135);
  ctx.lineTo(355, 155);
  ctx.lineTo(305, 137);
  ctx.fillStyle = "rgb(20, 12, 3)";
  ctx.fill();

  // lips
  ctx.beginPath();
  ctx.arc(245, 275, 15, 2 * Math.PI, Math.PI, true);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(265, 275, 15, 2 * Math.PI, Math.PI, true);
  ctx.fillStyle = "rgb(31, 18, 1)";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(236, 275);
  ctx.lineTo(273, 275);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(254, 275, 21, 2 * Math.PI, Math.PI);
  ctx.fillStyle = "rgb(48, 25, 1)";
  ctx.strokeStyle = "rgb(31, 18, 1)";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fill();
}

function sadFace() {
  drawFace();
  // first eye
  ctx.beginPath();
  ctx.arc(180, 190, 30, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 190, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "rgb(125, 70, 4)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 190, 15, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(185, 180, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 190, 30, 2 * Math.PI, Math.PI, true);
  ctx.fillStyle = "black";
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgb(41, 24, 3)";
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 190, 30, 2 * Math.PI, Math.PI);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgb(41, 24, 3)";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(180, 200, 30, 2 * Math.PI, Math.PI);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgb(41, 24, 3)";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(170, 218);
  ctx.lineTo(160, 240);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.moveTo(170, 218);
  ctx.lineTo(180, 240);
  ctx.arc(170, 240, 10, 2 * Math.PI, Math.PI);
  ctx.fillStyle = "rgb(36, 180, 224)";
  ctx.fill();
  ctx.stroke();
  // second eye
  ctx.beginPath();
  ctx.arc(320, 190, 30, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(320, 190, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "rgb(125, 70, 4)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(320, 190, 15, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(325, 180, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(320, 190, 30, 2 * Math.PI, Math.PI, true);
  ctx.fillStyle = "black";
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgb(41, 24, 3)";
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(320, 190, 30, 2 * Math.PI, Math.PI);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgb(41, 24, 3)";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(320, 200, 30, 2 * Math.PI, Math.PI);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgb(41, 24, 3)";
  ctx.stroke();
  //hat
  ctx.beginPath();
  ctx.arc(250, 170, 120, 2 * Math.PI, Math.PI, true);
  ctx.fillStyle = "rgb(55, 13, 77)";
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(69, 6, 102)";
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(123, 170);
  ctx.lineTo(373, 170);
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(245, 40, 30, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(69, 6, 102)";
  ctx.stroke();
  ctx.fill();
  // lips
  ctx.beginPath();
  ctx.arc(245, 275, 15, 2 * Math.PI, Math.PI, true);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(265, 275, 15, 2 * Math.PI, Math.PI, true);
  ctx.fillStyle = "black";
  ctx.fill();
  // tear drop
  ctx.beginPath();
  ctx.moveTo(236, 275);
  ctx.lineTo(273, 275);
  ctx.lineWidth = 4;
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(254, 275, 21, 2 * Math.PI, Math.PI);
  ctx.fillStyle = "rgb(48, 25, 1)";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fill();
}

function happyFace() {
  drawFace();
  // first eye
  ctx.beginPath();
  ctx.arc(180, 190, 30, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(38, 22, 3)";
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 190, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "rgb(125, 70, 4)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 190, 15, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(185, 180, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fill();
  // second eye
  ctx.beginPath();
  ctx.arc(320, 190, 30, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fillStyle = "white";
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(38, 22, 3)";
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(320, 190, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "rgb(125, 70, 4)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(320, 190, 15, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(325, 180, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fill();
  // right Eyebrow
  ctx.beginPath();
  ctx.moveTo(210, 135);
  ctx.lineTo(160, 125);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(20, 12, 3)";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(160, 125);
  ctx.lineTo(140, 145);
  ctx.lineTo(180, 128);
  ctx.fillStyle = "rgb(20, 12, 3)";
  ctx.fill();
  // left eyebrow
  ctx.beginPath();
  ctx.moveTo(290, 135);
  ctx.lineTo(335, 130);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(20, 12, 3)";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(335, 125);
  ctx.lineTo(355, 145);
  ctx.lineTo(305, 127);
  ctx.fillStyle = "rgb(20, 12, 3)";
  ctx.fill();
  //mouth
  ctx.beginPath();
  ctx.arc(253, 270, 20, 2 * Math.PI, Math.PI, false);

  ctx.arc(253, 265, 30, 2 * Math.PI, Math.PI);
  ctx.fillStyle = "white";
  ctx.lineWidth = 15;
  ctx.strokeStyle = "rgb(78, 19, 97)";
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(305, 263, 05, Math.PI / 2, -Math.PI / 2, true);
  ctx.strokeStyle = "rgb(38, 22, 3)";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(200, 263, 05, Math.PI / 2, -Math.PI / 2);
  ctx.strokeStyle = "rgb(38, 22, 3)";
  ctx.lineWidth = 5;
  ctx.stroke();
}

function wideEyes() {
  // first eye
  ctx.beginPath();
  ctx.arc(180, 190, 40, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(38, 22, 3)";
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 190, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "rgb(125, 70, 4)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 190, 15, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(185, 180, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fill();
  // second eye
  ctx.beginPath();
  ctx.arc(320, 190, 40, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fillStyle = "white";
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(38, 22, 3)";
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(320, 190, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "rgb(125, 70, 4)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(320, 190, 15, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(325, 180, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fill();
}
function relativelyNormalEyes() {
  // first eye
  ctx.beginPath();
  ctx.arc(180, 190, 40, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(38, 22, 3)";
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 190, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "rgb(125, 70, 4)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 190, 15, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(185, 180, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 190, 40, 0, 2 * Math.PI, false);
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(66, 39, 5)";
  ctx.stroke();

  // second eye
  ctx.beginPath();
  ctx.arc(320, 190, 40, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(38, 22, 3)";
  ctx.stroke();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(320, 190, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = "rgb(125, 70, 4)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(320, 190, 15, 0, 2 * Math.PI, false);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(325, 180, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(320, 190, 40, 0, 2 * Math.PI, false);
  ctx.fillStyle = "white";
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgb(66, 39, 5)";
  ctx.stroke();
}
function displaybeard() {
  ctx.beginPath();
  ctx.arc(250, 200, 120, Math.PI / 10, (9 * Math.PI) / 10, false);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 7;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(250, 210, 110, Math.PI / 10, (9 * Math.PI) / 10, false);
  ctx.lineWidth = 10;
  ctx.stroke();
}
function undoBeard() {
  ctx.beginPath();
  ctx.arc(250, 200, 120, Math.PI / 10, (9 * Math.PI) / 10, false);
  ctx.strokeStyle = "rgb(66, 39, 5)";
  ctx.lineWidth = 7;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(250, 210, 110, Math.PI / 10, (9 * Math.PI) / 10, false);
  ctx.lineWidth = 10;
  ctx.stroke();
}
function getMouseXY(e) {
  let boundingRect = canvas.getBoundingClientRect();
  let offsetX = boundingRect.left;
  let offsetY = boundingRect.top;
  // Assume equal width and height for border and padding
  let w = (boundingRect.width - canvas.width) / 2;
  let h = (boundingRect.height - canvas.height) / 2;
  offsetX += w;
  offsetY += h;
  // use clientX and clientY as getBoundingClientRect is used above
  let mx = Math.round(e.clientX - offsetX);
  let my = Math.round(e.clientY - offsetY);
  return { x: mx, y: my };
}
// this function checks if the mouse has clicked on the nose
function checkContainedNose(x, y, nosePosition) {
  if (
    x >= nosePosition.x - nosePosition.r - 3 &&
    x <= nosePosition.x + nosePosition.r + 3 &&
    y >= nosePosition.y - nosePosition.r - 3 &&
    y <= nosePosition.y + nosePosition.r + 3
  ) {
    // Check if nosePosition has been tapped a second time to reset eyes to normal
    if (nosePositionClick % 2 != 0) {
      wideEyes();
    } else {
      relativelyNormalEyes();
    }
  }
}
function checkContainedChin(x, y, chinPosition) {
  if (
    x >= chinPosition.x - chinPosition.r - 3 &&
    x <= chinPosition.x + chinPosition.r + 3 &&
    y >= chinPosition.y - chinPosition.r - 3 &&
    y <= chinPosition.y + chinPosition.r + 3
  ) {
    // Check if chinPosition has been tapped a second time to reset face to normal
    if (chinPositionClick % 2 != 0) {
      displaybeard();
    } else {
      undoBeard();
    }
  }
}
function widenEyes(evt, nosePosition) {
  nosePositionClick++;
  let pos = getMouseXY(evt);
  let inside = checkContainedNose(pos.x, pos.y, nosePosition);
  console.log("inside: " + inside);
  let str = "x, y, inside: " + pos.x + ", " + pos.y + ", " + inside;
}
function growBeard(evt, chinPosition) {
  chinPositionClick++;
  let pos = getMouseXY(evt);
  let inside = checkContainedChin(pos.x, pos.y, chinPosition);
  console.log("inside: " + inside);
  let str = "x, y, inside: " + pos.x + ", " + pos.y + ", " + inside;
}

document.getElementById("canvasFace").addEventListener("click", function (evt) {
  widenEyes(evt, nosePosition);
  growBeard(evt, chinPosition);
});
drawFace();
neutralFace();
let neutralFaceButton = document.getElementById("neutral-face");
let happyFaceButton = document.getElementById("happy-face");
let sadFaceButton = document.getElementById("sad-face");

neutralFaceButton.addEventListener("click", neutralFace);
happyFaceButton.addEventListener("click", happyFace);
sadFaceButton.addEventListener("click", sadFace);
