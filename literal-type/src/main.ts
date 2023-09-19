type Shape = "circle" | "square" | "triangle";

const calculateArea = (shape: Shape, dimension: number) => {

  let area: number;
  if (shape === "circle") {
    area = Math.PI * (dimension ** 2);
  }
  else if (shape === "square") {
    area = dimension ** 2;
  }
  else if (shape === "triangle") {
    area = (dimension ** 2) * (Math.sqrt(3) / 4);
  }
  else {
    area = NaN;
  }

  return area;
}; 

console.log(calculateArea("circle", 5)); // 78.53981633974483
console.log(calculateArea("square", 5)); // 25
console.log(calculateArea("triangle", 5)); // 10.825317547305483
console.log(calculateArea("dog", 5)); // NaN