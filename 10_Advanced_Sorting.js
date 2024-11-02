/**
 * Create an array of objects representing students with 'name' and 'grades' properties
 * Write a function to sort the students by average grade in descending order.
 */

const students = [
    { name: "Antu", grades: [88, 92, 85] },
    { name: "Chaity", grades: [95, 100, 90] },
    { name: "Satirtha", grades: [78, 82, 88] },
    { name: "Debi", grades: [82, 85, 87] },
];

// Function to calculate average and sort students by average grade
const sortStudentsByAverageGrade = (students) => {
    return students.sort((a, b) => {
        const averageA = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
        const averageB = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;

        // Sort in descending order
        return averageB - averageA;
    });
};

const sortedStudents = sortStudentsByAverageGrade(students);

console.log(sortedStudents);
