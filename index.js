// Your code here
class Polygon {
    constructor(array) {
        this.sides = array,
        this.count = this.sides.length
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((a, b) => a + b, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.count === 3) {
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.count === 4) {
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            let side4 = this.sides[3]
            return ((side1 === side2) && (side1 === side3) && (side1 === side4))
        }
    }

    get area() {
        if (this.count === 4) {
            return this.sides[0] * this.sides [0]
        }
    }
}