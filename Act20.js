const numbers = [1, 2];
const letters = ["a", "b"];

// Requirement 1: Array using .map() (Array 1)
const doubled = numbers.map((n) => n * 2);
// Requirement 1: Array using .map() (Array 2)
const upper = letters.map((l) => l.toUpperCase());

// Requirement 2: Destructured array 1
const [num1, num2] = doubled;
// Requirement 2: Destructured array 2
const [let1, let2] = upper;

// Requirement 3: Template literal 1
console.log(`Mapped Numbers: ${num1}, ${num2}`);
// Requirement 3: Template literal 2
console.log(`Mapped Letters: ${let1}, ${let2}`);