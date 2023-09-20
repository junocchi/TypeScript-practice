"use strict";
var add = function (num1, num2) { return num1 + num2; };
var subtract = function (num1, num2) { return num1 - num2; };
var divide = function (num1, num2) { return num1 / num2; };
var multiply = function (num1, num2) { return num1 * num2; };
console.log(add(15, 30)); // 45
console.log(subtract(155, 55)); // 100
console.log(divide(100, 5)); // 20
console.log(multiply(50, 3)); // 150
function combineOperations(choice1, choice2) {
    return function (num1, num2, num3) { return choice2(choice1(num1, num2), num3); };
}
var multiplyThenAdd = combineOperations(multiply, add);
var result = multiplyThenAdd(5, 3, 7); // (5 * 3) + 7
console.log(result); // => 22
