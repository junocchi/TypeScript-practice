// Create a Pet type with the following properties:

// name (string): The name of the pet.
// species (string): The species of the pet (e.g., Cat, Lizard, Chinchilla).
// age (number): The age of the pet.
// adopted (boolean): Whether the pet has an owner
// specialSkills (string[]): Any special skills the pet has picked up (e.g., Jumping, Flying, Laser eyes) etc.

type Pet = {
  name: string;
  species: string;
  age: number;
  adopted: boolean;
  specialSkills: string[];
};

// Create a class called PetShelter to manage a collection of pets. This class should have the following methods:

// addPet(pet): void: Adds a pet to the shelter and marks it as being not adopted.
// adoptPet(name): void: Removes a pet from the shelter and marks it as adopted.
// displayPets(): void: Lists all the pets in the shelter, displaying their information.
// allPets(): Pet[]: Returns an array of all pets.
// searchPetsBySpecies(species: string): Returns an array of pets with a specific species.
// searchPetsBySpecialSkill(skill: string): Returns an array of pets with a specific skill.
class