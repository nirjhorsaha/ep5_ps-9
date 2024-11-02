/**
 * Write a function that uses the reduce function to calculate the total value of a
 * array of objects with a 'quantity' and 'price' property.interview
 */

const items = [
    { quantity: 2, price: 10 },
    { quantity: 5, price: 20 },
    { quantity: 1, price: 15 },
];

// Function to calculate total value
const calculateTotalValue = (items) => {
    return items.reduce((total, item) => {
        return total + item.quantity * item.price;
    }, 0);
};

const totalValue = calculateTotalValue(items);

console.log(`Total Value: $${totalValue}`);
