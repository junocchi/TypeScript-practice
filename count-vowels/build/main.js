"use strict";
var countVowels = function (x) {
    if (typeof x === "string") {
        x = x.split("");
    }
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    return x.filter(function (char) { return vowels.includes(char); }).length;
};
console.log(countVowels("abcde")); // => 2
console.log(countVowels(["a", "e", "i", "o", "u"])); // => 5
console.log(countVowels("juliana"));
