/**
 * Create an array of objects representing cars with properties like make, model, and
 * year. Write a function to sort the array of cars by the year of manufacture in
 * ascending order. Print the sorted array.
 */

interface Car {
    make: string;
    model: string;
    year: number;
}

const cars: Car[] = [
    { make: "Toyota", model: "Camry", year: 2020 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Ford", model: "Mustang", year: 2022 },
    { make: "Chevrolet", model: "Malibu", year: 2019 }
];

// Function to sort cars by year in ascending order
const sortCarsByYear = (cars: Car[]): Car[] => {
    return cars.sort((a, b) => a.year - b.year);
};


const sortedCars = sortCarsByYear(cars);

console.log("Cars sorted by year:", sortedCars);
