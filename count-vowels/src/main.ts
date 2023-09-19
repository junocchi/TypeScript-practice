
type StringOrArray = string | string[];

const countVowels = (x: StringOrArray): number => {
  
    if (typeof x === "string") {
      x = x.split("");
    }
  
  const vowels: string[] = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U" ];
  return x.filter(char => vowels.includes(char)).length;
};

console.log(countVowels("abcde")); // => 2
console.log(countVowels(["a", "e", "i", "o", "u"])); // => 5