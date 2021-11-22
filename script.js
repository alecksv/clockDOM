var angle = 0;
var radius = 500;
var greenCenterX;
var greenCenterY;
var centerX = radius / 2;
var centerY = radius / 2;
var addMinutes = 0;

const lineHour = document.createElement("div");
const lineMinute = document.createElement("div");
const lineSecond = document.createElement("div");
const elclock = document.createElement("div");

// ****************************************************** Create wrapper for green circles
const wrapperGreen = document.createElement("div");

const yellowCircle = document.createElement("div");
yellowCircle.style.width = radius + "px";
yellowCircle.style.height = radius + "px";
yellowCircle.style.backgroundColor = "#fcca66";
yellowCircle.style.borderRadius = "50%";
document.body.append(yellowCircle);

// ****************************************************** Function create green circles & numbers
function createGreenCircles() {
  let fragment = new DocumentFragment();
  for (let i = 1; i < 13; i++) {
    let green = document.createElement("div");
    green.style.width = radius / 8 + "px";
    green.style.height = radius / 8 + "px";
    green.style.backgroundColor = "#48b382 ";
    green.style.borderRadius = "50%";
    green.style.position = "absolute";
    // ============================================== get radius & Radians & green positions
    angle += 30;
    var angleRadians = (parseFloat(angle) / 180) * Math.PI;
    green.style.top =
      centerX - (radius * Math.cos(angleRadians)) / 2.5 - radius / 20 + "px";
    green.style.left =
      +centerY + (radius * Math.sin(angleRadians)) / 2.5 - radius / 20 + "px";

    // wrapperGreen.append(green);
    fragment.append(green);

    //         =============get numbers============================================
    var dataNumber = document.createTextNode(i);
    var textNum = document.createElement("div");
    textNum.style.color = "white";
    textNum.style.fontSize = 36 + "px";
    textNum.style.textAnchor = "middle";
    textNum.style.fontWeight = "700";
    textNum.style.marginTop = 12 + "px";
    textNum.style.textAlign = "center";
    textNum.style.top = 25 + "px";
    textNum.style.left = 25 + "px";

    textNum.appendChild(dataNumber);
    green.append(textNum);
  }
  // ************************************************************** paste to the wrapper
  // yellowCircle.append(wrapperGreen);
  return fragment;
}
yellowCircle.append(createGreenCircles());
// createGreenCircles();

// ***************************************************** DRAW ARROWS *************************

// ********************************************************* lineHour
function createLineArrow() {
  var timeIsNow = new Date();
  var hoursValue = timeIsNow.getHours();
  var minutesValue = timeIsNow.getMinutes();
  var secondsValue = timeIsNow.getSeconds();

  lineHour.style.transformOrigin = "11px 11px";
  lineHour.style.transform =
    "rotate(" + (hoursValue * 30 + addMinutes - 90) + "deg)";

  lineMinute.style.transformOrigin = "7px 7px";
  lineMinute.style.transform = "rotate(" + (minutesValue * 6 - 90) + "deg)";

  lineSecond.style.transformOrigin = "4px 4px";
  lineSecond.style.transform = "rotate(" + (secondsValue * 6 - 90) + "deg)";

  elclock.style.fontSize = 36 + "px";
  elclock.style.position = "absolute";
  // elclock.style.marginTop = 50 + "px";
  elclock.style.top = 150 + "px";
  elclock.style.left = 175 + "px";

  if (hoursValue < 10) {
    hoursValue = "0" + hoursValue;
  }
  if (minutesValue < 10) {
    minutesValue = "0" + minutesValue;
  }
  if (secondsValue < 10) {
    secondsValue = "0" + secondsValue;
  }
  elclock.innerHTML = `${hoursValue} : ${minutesValue} : ${secondsValue}`;
}

lineHour.style.backgroundColor = "grey";
lineHour.style.border = 1 + "px";
lineHour.style.borderRadius = 20 + "px";
lineHour.style.position = "absolute";
lineHour.style.height = 20 + "px";
lineHour.style.width = radius / 2.8 + "px";
lineHour.style.left = Math.round(centerX - 0) + "px";
lineHour.style.top = Math.round(centerY - 0) + "px";
yellowCircle.append(lineHour);

// ********************************************************* lineMinute
lineMinute.style.backgroundColor = "blue";
lineMinute.style.border = 1 + "px";
lineMinute.style.borderRadius = 12 + "px";
lineMinute.style.position = "absolute";
lineMinute.style.height = 12 + "px";
lineMinute.style.width = radius / 2.4 + "px";
lineMinute.style.left = Math.round(centerX - 0) + "px";
lineMinute.style.top = Math.round(centerY - 0) + "px";
yellowCircle.append(lineMinute);

// ********************************************************* lineSecond
lineSecond.style.backgroundColor = "red";
lineSecond.style.border = 1 + "px";
lineSecond.style.borderRadius = 5 + "px";
lineSecond.style.position = "absolute";
lineSecond.style.height = 6 + "px";
lineSecond.style.width = radius / 2.2 + "px";
lineSecond.style.left = Math.round(centerX - 0) + "px";
lineSecond.style.top = Math.round(centerY - 0) + "px";
yellowCircle.append(lineSecond);

yellowCircle.append(elclock);

let timerClockStart = setInterval(createLineArrow, 1000);
