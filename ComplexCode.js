/**
 * Filename: ComplexCode.js
 * 
 * Description: This code demonstrates a complex, elaborate JavaScript program
 * with various functionalities and features.
 */

// Class representing a shape
class Shape {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  // Method to calculate the area of the shape
  calculateArea() {
    throw new Error('Method not implemented.');
  }

  // Method to draw the shape
  draw() {
    console.log(`Drawing a ${this.color} ${this.name}`);
  }
}

// Class representing a Circle, extending Shape class
class Circle extends Shape {
  constructor(radius, color) {
    super('Circle', color);
    this.radius = radius;
  }

  // Overriding the calculateArea method
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Class representing a Rectangle, extending Shape class
class Rectangle extends Shape {
  constructor(width, height, color) {
    super('Rectangle', color);
    this.width = width;
    this.height = height;
  }

  // Overriding the calculateArea method
  calculateArea() {
    return this.width * this.height;
  }
}

// Class representing a complex calculator
class Calculator {
  constructor() {
    this.result = 0;
  }

  // Method to add numbers
  add(...nums) {
    this.result = nums.reduce((acc, curr) => acc + curr, 0);
  }

  // Method to subtract numbers
  subtract(...nums) {
    this.result = nums.reduce((acc, curr) => acc - curr);
  }

  // Method to multiply numbers
  multiply(...nums) {
    this.result = nums.reduce((acc, curr) => acc * curr, 1);
  }

  // Method to divide numbers
  divide(...nums) {
    this.result = nums.reduce((acc, curr) => acc / curr);
  }
}

// Instantiate the Calculator class
const calculator = new Calculator();

// Perform calculations
calculator.add(5, 10, 15);
console.log('Result:', calculator.result);

calculator.subtract(8, 3);
console.log('Result:', calculator.result);

calculator.multiply(2, 4, 6);
console.log('Result:', calculator.result);

calculator.divide(20, 5, 2);
console.log('Result:', calculator.result);

// Creating instances of shapes
const circle = new Circle(5, 'red');
const rectangle = new Rectangle(4, 6, 'blue');

// Calling methods on shapes
circle.draw();
console.log('Circle Area:', circle.calculateArea());

rectangle.draw();
console.log('Rectangle Area:', rectangle.calculateArea());

// Other complex code...

// ...
// More code...
// ...

// End of code