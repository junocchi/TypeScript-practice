type Color = [number, number, number];

function createColor(r: number, g: number, b: number): Color {
  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw new Error("RGB values are between 0 and 255.");
  }
  return [r, g, b];
}

function isBright(color: Color): boolean {
  const average = (color[0] + color[1] + color[2]) / 3;
  return average > 127.5;
}

function invertColor(color: Color): Color {
  const invertedR = 255 - color[0];
  const invertedG = 255 - color[1];
  const invertedB = 255 - color[2];
  return [invertedR, invertedG, invertedB];
}

const userColor = createColor(255, 0, 255);
console.log(userColor);

console.log(isBright(userColor));

const invertedColor = invertColor(userColor);
console.log(invertedColor);

// node build/main.js
// output:
// [ 255, 0, 255 ]
// true
// [ 0, 255, 0 ]