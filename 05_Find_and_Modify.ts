/**
 * Write a function that searches an array of objects for a specific person by name. If 
 * found, modify their age property. Print the updated array.
 */

interface Person {
    name: string;
    age: number;
}

const people: Person[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

// Function to find a person by name and update their age
const updatePersonAge = (people: Person[], name: string, newAge: number): void => {
    const person = people.find(person => person.name === name); // Find the person by name
    if (person) {
        person.age = newAge; // Update the age if the person is found
    } else {
        console.log(`Person named ${name} not found.`);
    }
};

updatePersonAge(people, "Bob", 28); 

console.log("Updated people array:", people);
