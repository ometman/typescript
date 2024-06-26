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
