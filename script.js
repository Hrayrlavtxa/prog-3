
for (let i = 0; i < n; i++) {
    matrix.push([])
    for (let g = 0; g < m; g++) {
        matrix[i].push(0)
    }
}
function characters(index, count) {
    for (let a = 0; a < count; a++) {
        var v = Math.floor(random(0, n))
        var w = Math.floor(random(0, m))
        matrix[v][w] = index
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            rect(x * side, y * side, side, side);
        }
    }
}

socket = io();
var side = 20,m = 40, n = 40;
function setup() {
frameRate(40);
createCanvas(n * side, m * side);
background('#e8e8e8');
}
function drawMatrix(data) {
matrix = data.matrix;
for (var y = 0; y < matrix.length; y++) {
// . . . 
}
}
socket.on("matrix", drawMatrix);