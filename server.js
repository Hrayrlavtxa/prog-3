var express = require("express");                                 
var app = express();                                              
var server = require('http').Server(app);                         
var io = require('socket.io')(server);                            
var random = require("/random")                                   
app.use(express.static("../client"));                             
app.get("/", function (req, res) {                                
res.redirect("index.html");                                       
});                                                               
server.listen(3000, function () {                                 
console.log("App is running on port 3000");                       
});                                                               
                                                                  
                                                                  
var Grass = require("./grass")                                    
var GrassEater = require("./grasseater")                          
var Predator = require("./predator")                              
                                                                  
                                                                  
var matrix = []                                                   
var n = 28                                                        
var m = 40                                                        
var side = 30;                                                    
var grassArr = []                                                 
var grassEaterArr = []                                            
var predatorArr = []                                              
var flashArr = []                                                 
                                                                  
                                                                  
function setup() {                                                
    characters(1, 600)                                            
    characters(2, 200)                                            
    characters(3, 80)                                             
    frameRate(5);                                                 
    createCanvas(matrix[0].length * side, matrix.length * side);  
    background('#acacac');                                        
    for (var y = 0; y < matrix.length; ++y) {                     
        for (var x = 0; x < matrix[y].length; ++x) {              
            if (matrix[y][x] == 1) {                              
                var gr = new Grass(x, y, 1);                      
                grassArr.push(gr);                                
            }                                                     
            else if (matrix[y][x] == 2) {                         
                var grEa = new GrassEater(x, y, 1);               
                grassEaterArr.push(grEa);                         
            }                                                     
            else if (matrix[y][x] == 3) {                         
                var pre = new Predator(x, y, 3);                  
                predatorArr.push(pre);                            
            }                                                     
            else if (matrix[y][x] == 4) {                         
                var fle = new Flash(x, y, 3);                     
                flashArr.push(fle);                               
            }                                                     
        }                                                         
    }                                                             
}                                                                 
                                                                  
function startgame() {                                            
    for (var i in grassArr) {                                     
        grassArr[i].mul();                                        
    }                                                             
    for (var i in grassEaterArr) {                                
        grassEaterArr[i].eat();                                   
    }                                                             
    for (var i in predatorArr) {                                  
        predatorArr[i].eat();                                     
    }                                                             
    for (var i in flashArr) {                                     
        setInterval(15000)                                        
        flashArr[i].eat();                                        
    }                                                             
                                                                  
}                                                                 
                                                                  