type Operation = (num1: number, num2: number) => number;

const add: Operation = (num1, num2) => num1 + num2;
const subtract: Operation = (num1, num2) => num1 - num2;
const divide: Operation = (num1, num2) => num1 / num2;
const multiply: Operation = (num1, num2) => num1 * num2;

console.log(add(15,30)); // 45
console.log(subtract(155,55)); // 100
console.log(divide(100,5)); // 20
console.log(multiply(50,3)); // 150

function combineOperations(choice1: Operation, choice2: Operation): (num1: number, num2: number, num3: number) => number {
  return (num1, num2, num3) => choice2(choice1(num1, num2), num3);
}

const multiplyThenAdd = combineOperations(multiply, add);
const result = multiplyThenAdd(5, 3, 7); // (5 * 3) + 7
  console.log(result); // => 22