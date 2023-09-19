// countVowels("abcde"); // => 2
// countVowels(["a", "e", "i", "o", "u"]); // => 3

type StringOrArray = string | string[];

const countVowels = (x: StringOrArray): number => {
  
    if (typeof x === "string") {
      x = x.split("");
    }
  
  const vowels: string[] = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U" ];
  //const lowerCaseStr: string = x.toLowerCase();
  //const chars = x.split(", ");
  return x.filter(char => vowels.includes(char)).length;
};