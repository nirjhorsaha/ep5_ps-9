/**
 * Create an array of objects, each representing a person with properties like name,
 * age, and gender. Write a function to filter out all females and then map the
 * remaining people to an array of names. Print the final result.
 */

interface Person {
    name: string;
    age: number;
    gender: string;
}

// Array of Person objects
const people: Person[] = [
    { name: "Alisha", age: 30, gender: "female" },
    { name: "Boby", age: 25, gender: "male" },
    { name: "Chokmok", age: 35, gender: "male" },
    { name: "Disha", age: 28, gender: "female" },
    { name: "Elon", age: 40, gender: "male" }
];

// Function to filter out females and return an array of names of remaining people
const getMaleNames = (people: Person[]): string[] => {
    return people
        .filter(person => person.gender !== "female") 
        .map(person => person.name); 
};

const maleNames = getMaleNames(people);

console.log("Names of non-female people:", maleNames);
