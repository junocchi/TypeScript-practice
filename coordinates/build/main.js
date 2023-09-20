"use strict";
function getXYCoordinates(coordinate) {
    var x = coordinate.x, y = coordinate.y;
    return { x: x, y: y };
}
var userCoord = { x: 10, y: 20, z: 30 };
var xyCoordinates = getXYCoordinates(userCoord);
console.log(xyCoordinates);
