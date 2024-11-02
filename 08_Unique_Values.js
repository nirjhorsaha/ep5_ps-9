/**
 * Create an array of numbers with some duplicate values. Write a function to filter out the duplicate
 * values and return a new array with only unique numbers. Print the result.
 */


const numbers = [1, 2, 3, 2, 4, 5, 3, 6, 1];

// Function to filter out duplicate values 
const getUniqueValues = (arr) => {
    return arr.reduce((uniqueArray, current) => {
        if (!uniqueArray.includes(current)) {
            uniqueArray.push(current); 
        }
        return uniqueArray; 
    }, []);
};

const uniqueNumbers = getUniqueValues(numbers);

console.log(`Unique Numbers: ${uniqueNumbers}`);
