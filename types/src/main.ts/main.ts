// Simple type annotation
let count: number;
let input: string;
let isComplete: boolean;

// Function annotation
function isEven(n: number): boolean {
  return n % 2 == 0
}

const isOdd = (n: number): boolean => {
  return !isEven(n)
}

// Array annotation
const films: string[] = [];

// Object annotation
const person: {name: string, age: number} = {name: 'John', age: 30}

