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


// 1. Function Declaration
// A function declaration creates a function with a name, 
// which can be called by that name. 
// TypeScript allows you to specify the types for the function’s parameters and return value.

function adder(a: number, b: number): number {
    return a + b;
}

let result = adder(2, 3); // result is 5

// In the example above:

// a: number and b: number specify that a and b are parameters of type number.
// : number after the parameter list specifies that the function returns a number.


// 2. Function Expression
// A function expression defines a function and 
// assigns it to a variable. It can be anonymous or named.

// Anonymous function expression
let subtract = function(a: number, b: number): number {
    return a - b;
};

console.log(subtract(5, 3)); // Outputs: 2

// Named function expression
let multiply = function multiplyFn(a: number, b: number): number {
    return a * b;
};

console.log(multiply(4, 2)); // Outputs: 8


// 3. Arrow Function
// Arrow functions provide a concise syntax for writing function expressions. 
// They also lexically bind 'this', which can be useful in certain contexts.

let divide = (a: number, b: number): number => {
    return a / b;
};

console.log(divide(10, 2)); // Outputs: 5

// Single-line arrow function with implicit return
let square = (x: number): number => x * x;

console.log(square(4)); // Outputs: 16


// 4. Function Types
// You can define types for functions to ensure that they accept specific 
// types of arguments and return a specific type. 
// This can be done explicitly using type annotations.

// Function type: (a: number, b: number) => number
let addNumbers: (a: number, b: number) => number;

addNumbers = (x: number, y: number): number => {
    return x + y;
};

console.log(addNumbers(5, 7)); // Outputs: 12


// 5. Optional and Default Parameters
// Parameters can be optional or have default values. 
// Optional parameters are denoted by a ? after the parameter name, 
// while default parameters have a default value specified.

// Optional parameter 'middleName'
function getFullName(firstName: string, lastName: string, middleName?: string): string {
    if (middleName) {
        return `${firstName} ${middleName} ${lastName}`;
    }
    return `${firstName} ${lastName}`;
}

console.log(getFullName("John", "Doe")); // Outputs: "John Doe"
console.log(getFullName("John", "Doe", "William")); // Outputs: "John William Doe"

// Default parameter 'discount' is 0.1
function calculateTotal(price: number, discount: number = 0.1): number {
    return price * (1 - discount);
}

console.log(calculateTotal(100)); // Outputs: 90
console.log(calculateTotal(100, 0.2)); // Outputs: 80


// 6. Rest Parameters
// Rest parameters allow a function to accept an arbitrary number of arguments. 
// They are represented by ... followed by the parameter name and are treated as an array.

function sumAll(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Outputs: 10
console.log(sumAll(10, 20, 30)); // Outputs: 60


// 7. Function Overloading
// Function overloading allows you to define multiple signatures for a single function. 
// This is useful when a function can accept different types or numbers of parameters.

// Function overloads
function format(input: string): string;
function format(input: number): string;

// Implementation that handles both signatures
function format(input: any): string {
    if (typeof input === "string") {
        return `String: ${input}`;
    } else if (typeof input === "number") {
        return `Number: ${input.toFixed(2)}`;
    }
    return '';
}

console.log(format("Hello")); // Outputs: "String: Hello"
console.log(format(123.456)); // Outputs: "Number: 123.46"

// In this example:

// There are two overloads for the format function: 
// one that accepts a string and another that accepts a number.
// The actual implementation handles both types using type checking.

// Summary
// Functions in TypeScript are powerful tools for building modular, 
// reusable code. By understanding the various ways to define and use 
// functions, you can write more robust and maintainable code. Here’s a quick recap:

// Function Declaration: Defines a named function with specified parameter and return types.
// Function Expression: Assigns an anonymous or named function to a variable.
// Arrow Function: Provides a concise syntax and lexically binds this.
// Function Types: Defines the types of parameters and return values explicitly.
// Optional and Default Parameters: Allow flexibility in how functions are called.
// Rest Parameters: Handle multiple arguments as an array.
// Function Overloading: Define multiple signatures for a function to handle 
// different parameter types or counts.
// These features make functions in TypeScript versatile and essential 
// for any TypeScript developer.