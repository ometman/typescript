// Functions
// Functions can be typed with parameter types and return types. 
// TypeScript also supports optional and default parameters.

function add(x: number, y: number): number {
    return x + y;
}

let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

function buildName(firstName: string, lastName: string = "Smith"): string {
    return firstName + " " + lastName;
}

// Functions are fundamental building blocks in TypeScript, just as they are in JavaScript. 
// They allow you to encapsulate reusable logic, take input in the form of parameters, 
// and return output. TypeScript enhances functions with type annotations, 
// providing better type safety and clearer code.

// Key Concepts of Functions in TypeScript

// Function Declaration: Defines a named function.
// Function Expression: Defines an anonymous function assigned to a variable.
// Arrow Function: A shorter syntax for writing function expressions.
// Function Types: Define types for parameters and return values.
// Optional and Default Parameters: Allow flexibility in calling functions.
// Rest Parameters: Handle multiple arguments as an array.
// Overloading: Define multiple function signatures for the same function.
