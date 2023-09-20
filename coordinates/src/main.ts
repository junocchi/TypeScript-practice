type Coordinate = { x: number; y: number; z: number };

function getXYCoordinates(coordinate: Coordinate): { x: number; y: number } {
  const { x, y } = coordinate;
  return { x, y };
  //option
  //return { x: coordinate.x, y: coordinate.y};
}

const userCoord: Coordinate = { x: 10, y: 20, z: 30 };

const xyCoordinates = getXYCoordinates(userCoord);

console.log(xyCoordinates); // { x: 10, y: 20 }
