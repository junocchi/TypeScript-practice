type Operation = (num1: number, num2: number) => number;

const add: Operation = (num1, num2) => num1 + num2;
const subtract: Operation = (num1, num2) => num1 - num2;


console.log(add(15,30)); // 45
console.log(subtract(155,55)); // 100
