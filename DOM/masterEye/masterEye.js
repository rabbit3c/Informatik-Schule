var xwin = window.innerWidth;
var ywin = window.innerHeight;

var fgRed, fgGreen, fgBlue;		//Vordergrunsfarbe (rgb)
fgRed = 200; fgGreen = 0; fgBlue = 0;

draw();

function draw() {
    var c = document.getElementById("myCanvas");
    //c.width=400; //"100%" geht nicht 
    //c.height=200; "auto";
    c.height = c.width;
    xmax = c.width;
    ymax = c.height;

    console.log(xmax, ymax);
    var ctx = c.getContext("2d");
    ctx.fillStyle = "rgb(" + fgRed + "," + fgGreen + "," + fgBlue + ")";
    //ctx.fillStyle="rgb(100,200,0)";
    ctx.fillRect(0, 0, 20, 20);

}

function resetLabels() {

}

function newLevel() {

}

function init() {

}

function letsGo() {

}

function redChange(newValue) {

}
function greenChange(newValue) {

}
function blueChange(newValue) {

}
