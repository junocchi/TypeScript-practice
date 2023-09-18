// inside src/main.ts
// This function takes a string ↓        ↓ and returns a number
const numberOfLetters = (str: string): number => {
  const matches = str.match(/[a-zA-Z]/g);
  if (!matches) return 0;
  return matches.length;
};

console.log(numberOfLetters("Learning Typescript!!"));
