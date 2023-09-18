"use strict";
// Simple type annotation
var count;
var input;
var isComplete;
// Function annotation
function isEven(n) {
    return n % 2 == 0;
}
var isOdd = function (n) {
    return !isEven(n);
};
// Array annotation
var films = [];
// Object annotation
var person = { name: 'John', age: 30 };
