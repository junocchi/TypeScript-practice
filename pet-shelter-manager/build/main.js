"use strict";
// Create a Pet type
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var dog = {
    name: "Lola",
    species: "Dog",
    age: 3,
    adopted: true,
    specialSkills: ["grab-and-go"],
};
var fish = {
    name: "Nuno",
    species: "Fish",
    age: 1,
    adopted: false,
    specialSkills: ["sleepwalking"],
};
// Create a class called PetShelter to manage a collection of pets.
var PetShelter = /** @class */ (function () {
    function PetShelter() {
        this.shelter = [];
    }
    // Adds a pet to the shelter and marks it as being not adopted.
    PetShelter.prototype.addPet = function (pet) {
        this.shelter.push(__assign(__assign({}, pet), { adopted: false })); // clone pet, override adoption state to false, and add it to the shelter's array
    };
    // Removes a pet from the shelter and marks it as adopted.
    PetShelter.prototype.adoptPet = function (name) {
        var petIndex = this.shelter.findIndex(function (pet) { return pet.name === name; });
        if (petIndex !== -1) {
            this.shelter[petIndex].adopted = true;
        }
        this.shelter.splice(petIndex, 1);
    };
    // Lists all the pets in the shelter, displaying their information.
    PetShelter.prototype.displayPets = function () {
        this.shelter.forEach(function (pet) {
            console.log('Name:', pet.name);
            console.log('Species:', pet.species);
            console.log('Age:', pet.age);
            console.log('Adopted:', pet.adopted ? 'Yes' : 'No');
            console.log('Special Skills:', pet.specialSkills.join(', '));
            console.log('\n');
        });
    };
    // Returns an array of all pets.
    PetShelter.prototype.allPets = function () {
        return this.shelter;
    };
    // Returns an array of pets with a specific species.
    PetShelter.prototype.searchPetsBySpecies = function (species) {
        return this.shelter.filter(function (pet) { return pet.species === species; });
    };
    // Returns an array of pets with a specific skill.
    PetShelter.prototype.searchPetsBySpecialSkill = function (skill) {
        return this.shelter.filter(function (pet) { return pet.specialSkills.includes(skill); });
    };
    return PetShelter;
}());
;
var shelter = new PetShelter();
shelter.addPet(dog);
shelter.addPet(fish);
shelter.adoptPet("Nuno");
shelter.displayPets();
shelter.searchPetsBySpecialSkill("grab-and-go");
shelter.searchPetsBySpecies("dog");
