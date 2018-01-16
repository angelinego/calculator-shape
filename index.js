// LEVEL 0
var radius = 10;
var circleArea = Math.PI * Math.pow(radius, 2);
console.log(circleArea);

var circleCircumference = 2 * Math.PI * radius
console.log(circleCircumference);

// LEVEL 1
//circle area and perimeter
var width = 8

function calculateSquareArea() {
  var squareArea = Math.pow(width, 2)
  return squareArea;
}
console.log(calculateSquareArea())

//square area and perimeter
function calculateSquarePerimeter() {
  var squarePerimeter = 4 * width
  return squarePerimeter;
}
console.log(calculateSquarePerimeter());

//cube area and volume
function calculateCubeArea() {
  var cubeArea = 6 * Math.pow(width, 2)
  return cubeArea
}
console.log(calculateCubeArea());

function calculateCubeVolume() {
  var cubeVolume = Math.pow(width, 3)
  return cubeVolume
}
console.log(calculateCubeVolume())


//LEVEL 2
function calculateTubeArea() {
  var tubeHeight = 5
  var tubeArea = (2 * circleArea) + (tubeHeight * circleCircumference)
  return tubeArea
}
console.log(calculateTubeArea())

function calculateTubeVolume() {
  var tubeHeight = 5
  var tubeVolume = Math.PI * Math.pow((radius), 2) * tubeHeight
  return tubeVolume
}
console.log(calculateTubeVolume())