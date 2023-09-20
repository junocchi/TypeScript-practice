"use strict";
// magenta [255,0,255]
function createColor(r, g, b) {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        throw new Error("RGB values are between 0 and 255.");
    }
    return [r, g, b];
}
function isBright(color) {
    var average = (color[0] + color[1] + color[2]) / 3;
    return average > 127.5;
}
function invertColor(color) {
    var invertedR = 255 - color[0];
    var invertedG = 255 - color[1];
    var invertedB = 255 - color[2];
    return [invertedR, invertedG, invertedB];
}
var userColor = createColor(0, 100, 100);
console.log(userColor);
console.log(isBright(userColor));
var invertedColor = invertColor(userColor);
console.log(invertedColor);
