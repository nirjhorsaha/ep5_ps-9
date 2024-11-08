/**
 * Create an array of objects representing books with properties like title, author, and
 * year. Write a function that takes the array and returns a new array with only the
 * book titles. Print the result.
 */

interface Book {
    title: string;
    author: string;
    year: number;
}

// Array of Book objects
const books: Book[] = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
];

// Function to extract book titles from an array of books
const getBookTitles = (books: Book[]): string[] => {
    return books.map(book => book.title); // Map each book to its title
};

// Example usage
const bookTitles = getBookTitles(books);
console.log("Book Titles:", bookTitles);
