//Game of Life, Version Dammer
// 2 oder 2 Nachbarn: Zelle bleibt, 3 Nachbarn: Zelle wird geboren, sonst 0


//Globale Vars
var a = 7; //Kantenlänge der Blocks

var xmax, ymax; //Canvasgrösse
var data;   //Hauptdatenfeld 0 noch frei, 1 Zelle, 2 wieder frei
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var nx, ny;  //Anzahl Blocks pro Zeile, Spalte


init(); //create the starting state for the grid 
drawGrid();
start();


//functions
function createArray(a, b) {
    var arr = new Array(a);
    for (var i = 0; i < a; i++) {
        arr[i] = new Array(b);
    }
    return arr;
}

function init() {
    ymax = c.height;
    xmax = c.width;
    nx = Math.floor(xmax / a);
    ny = Math.floor(ymax / a);
    data = createArray(nx, ny);
    addObject();
}

function drawGrid() {
    ctx.clearRect(0, 0, xmax, ymax);
    for (var i = 0; i < ny; i++)
        for (var j = 0; j < nx; j++)
            if (data[j][i] === 1)
                ctx.fillRect(j * a, i * a, a, a);
}

function step() {
    let dataNew = createArray(nx, ny);

    for (let i = 0; i < ny; i++) {
        for (let j = 0; j < nx; j++) {
            let amountNeighbours = countNeighbours(i, j);

            if (amountNeighbours == 3) {
                dataNew[i][j] = 1;
            }
            else if (amountNeighbours == 2 && data[i][j] == 1) {
                dataNew[i][j] = 1;
            }
        }
    }

    data = dataNew;
    drawGrid();
}

function countNeighbours(x, y) {
    let amount = 0;

    for (let ix = x - 1; ix < x + 2; ix++) {
        for (let iy = y - 1; iy < y + 2; iy++) {
            if (ix == x && iy == y) continue;

            if (iy < 0 || ix < 0) continue;
            if (iy >= ny || ix >= nx) continue;

            if (data[ix][iy] == 1) amount++;

        }
    }

    return amount;
}

function addObject() {
    let object = //MWSS and glider
        [
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]


    for (let x = 0; x < object.length; x++) {
        for (let y = 0; y < object[x].length; y++) {
            data[y + 10][x + 10] = object[x][y];
        }
    }
}

function start() {
    setInterval(step, 100);
}


