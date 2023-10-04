class Flash {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x, this.y - 1], ,
            [this.x, this.y + 1],
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates()

        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;


    }
    mul() {
        var newCell = random(this.chooseCell(1));
        if (newCell) {
            var newflash = new Flash(newCell[0], newCell[1], this.index);
            flashArr.push(newflash);
            matrix[newCell[1]][newCell[0]] = 2;
        }
    }
    eat() {
        let foods = this.chooseCell(1)
        let foods = this.chooseCell(2)
        let foods = this.chooseCell(3)
        let food = random(foods)
        if (food) {
            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[food[1]][food[0]] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr, predatorArr, grassEaterArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                } else if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                } else if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy > 12) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
    move() {
        this.energy--
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY
        }

    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}

