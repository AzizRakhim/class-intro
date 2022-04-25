class Square{
  constructor(_width){
    this.width = _width;
    this.height = _width;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.width = Math.sqrt(value);
    this.height = this.width;
  }
}

let square1 = new Square(25);
square1.area = 100;
console.log(square1.width);