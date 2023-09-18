// Create a Pet type

type Pet = {
  name: string;
  species: string;
  age: number;
  adopted: boolean;
  specialSkills: string[];
};

const dog = {
  name: "Lola",
  species: "Dog",
  age: 3,
  adopted: true,
  specialSkills: ["grab-and-go"],
};

const fish = {
  name: "Nuno",
  species: "Fish",
  age: 1,
  adopted: false,
  specialSkills: ["sleepwalking"],
};

// Create a class called PetShelter to manage a collection of pets.
class PetShelter {
  shelter: Pet[] = [];
  
  // Adds a pet to the shelter and marks it as being not adopted.
  addPet(pet: Pet): void {
    this.shelter.push({ ...pet, adopted: false }); // clone pet, override adoption state to false, and add it to the shelter's array
  }

  // Removes a pet from the shelter and marks it as adopted.
  adoptPet(name: string): void {
    const petIndex = this.shelter.findIndex((pet) => pet.name === name);
    if (petIndex !== -1) {
      this.shelter[petIndex].adopted = true;
    }
    this.shelter.splice(petIndex, 1);
  }

  // Lists all the pets in the shelter, displaying their information.
  displayPets(): void {
    this.shelter.forEach((pet) => {
      console.log('Name:', pet.name);
      console.log('Species:', pet.species);
      console.log('Age:', pet.age);
      console.log('Adopted:', pet.adopted ? 'Yes' : 'No');
      console.log('Special Skills:', pet.specialSkills.join(', '));
      console.log('\n');
    });
  }

  // Returns an array of all pets.
  allPets(): Pet[] {
    return this.shelter;
  }

  // Returns an array of pets with a specific species.
  searchPetsBySpecies(species: string) {
    return this.shelter.filter((pet) => pet.species === species);
  }

  // Returns an array of pets with a specific skill.
  searchPetsBySpecialSkill(skill: string) {
    return this.shelter.filter((pet) => pet.specialSkills.includes(skill));
  }
};


const shelter = new PetShelter();

  shelter.addPet(dog);
  shelter.addPet(fish);
  shelter.adoptPet("Nuno");
  shelter.displayPets();
  shelter.searchPetsBySpecialSkill("grab-and-go");
  shelter.searchPetsBySpecies("dog");

// build git:(main) node main.js
// output:
// Name: Lola
// Species: Dog
// Age: 3
// Adopted: No
// Special Skills: grab-and-go