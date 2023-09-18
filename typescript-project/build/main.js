"use strict";
// inside src/main.ts
// This function takes a string ↓        ↓ and returns a number
var numberOfLetters = function (str) {
    var matches = str.match(/[a-zA-Z]/g);
    if (!matches)
        return 0;
    return matches.length;
};
console.log(numberOfLetters("Learning Typescript!!"));
