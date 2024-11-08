/**
 * Create an array of numbers. Write a function that uses the reduce method to calculate
 * the sum of all even numbers in the array.
 */


const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to calculate the sum of all even numbers
const sumOfEvens = (numbers: number[]): number => {
    return numbers.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum; // Add to sum if num is even
    }, 0);
};

const results = sumOfEvens(numbers);

console.log("Sum of all even numbers:", results);
