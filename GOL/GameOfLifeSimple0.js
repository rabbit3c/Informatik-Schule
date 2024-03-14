//Game of Life, Version Dammer
// 2 oder 2 Nachbarn: Zelle bleibt, 3 Nachbarn: Zelle wird geboren, sonst 0


//Globale Vars
var a=7; //Kantenlänge der Blocks

var xmax,ymax; //Canvasgrösse
var data;   //Hauptdatenfeld 0 noch frei, 1 Zelle, 2 wieder frei
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.canvas.width=window.innerWidth;
ctx.canvas.height=window.innerHeight;
var nx,ny;  //Anzahl Blocks pro Zeile, Spalte


init(); //create the starting state for the grid 
drawGrid()

//functions
function createArray(a,b) {
    var arr = new Array(a);
    for (var i = 0; i < a; i++) {
        arr[i] = new Array(b);
    }
    return arr;
}

function init() {     
    ymax=c.height;
    xmax=c.width;
    nx=Math.floor(xmax/a);
    ny=Math.floor(ymax/a);
    data =createArray(nx,ny);
	data[3][3]=1;
   }

function drawGrid() { 
    ctx.clearRect(0, 0, xmax, ymax);
    for (var i = 0; i < ny; i++) 
        for (var j = 0; j < nx; j++) 
            if (data[j][i] === 1) 
                ctx.fillRect(j*a, i*a , a, a);
}




