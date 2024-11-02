/**
 * Write a function that takes an array of numbers and returns the maximum value.
 */

const numbers = [3, 5, 17, 2, 8, 10, 1];

// Function to find the maximum value in an array
const findMaximumValue = (numbers) => {
    return numbers.reduce((max, current) => {
        return current > max ? current : max;
    }, numbers[0]);
};

const maxValue = findMaximumValue(numbers);
console.log(`Maximum Value: ${maxValue}`);
