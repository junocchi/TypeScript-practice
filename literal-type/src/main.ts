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

  console.log(area);
  return area;
}; 