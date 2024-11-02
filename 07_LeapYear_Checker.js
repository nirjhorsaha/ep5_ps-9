/**
 * Write a function that determines whether a given year is a leap year.
 */

const year = 2028;

const isLeapYear = (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(`${year} is ${isLeapYear(year) ? "a leap year" : "not a leap year"}`);
