var helicopter = document.getElementById("helicopter");

var section = document.getElementById("windowView");

var layerZero = document.getElementById("sky");
var layerOne = document.getElementById("bgImage");
var layerTwo = document.getElementById("mountain1");
var layerThree = document.getElementById("mountain2");
var layerFour = document.getElementById("mountain3");
var layerFive = document.getElementById("person");

var mouseX = 0;
var mouseY = 0;

var centerScreen = (1350 / 2) - (1350 / 2);

window.addEventListener('mousemove', onMouseMove);

function onMouseMove(event) {
    console.log(event.pageX);
    mouseX = event.pageX - container.offsetLeft;
    mouseY = event.pageY;

    helicopter.style.left = mouseX - 365 + "px";
    helicopter.style.top = mouseY - 215 + "px";

    layerZero.style.left = -mouseX * 0.00 + centerScreen + "px"
    layerOne.style.left = -mouseX * 0.01 + centerScreen + "px";
    layerTwo.style.left = mouseX * 0.03 + centerScreen + "px";
    layerThree.style.left = -mouseX * 0.06 + centerScreen + "px";
    layerFour.style.left = mouseX * 0.09 + centerScreen + "px";
    layerFive.style.left = -mouseX * 0.12 + centerScreen + "px";
}