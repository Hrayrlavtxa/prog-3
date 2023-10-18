var express = require("express");
var app = express();
app.use(express.static("/Users/user/Desktop/prog-3"));
app.get("/", function (req, res) {
    res.redirect("index.html");
});
app.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var Square = require("./module");
var mySquareObject = new Square(5);
function main() {
    console.log(mySquareObject.getArea());
}
main();