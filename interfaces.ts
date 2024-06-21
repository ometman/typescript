// Interfaces in TypeScript are a powerful way to define the shape of objects. 
// They can describe the properties, their types, and methods that an object should have. 
// This helps enforce type safety and makes your code more robust and maintainable.

// Why Use Interfaces?
// Type Safety: They ensure that objects conform to a specific structure.
// Code Readability: They make the expected structure of data clear.
// Autocompletion: IDEs can provide better autocompletion and error checking.
// Reusable Definitions: Interfaces can be reused across different parts of an application.

// Defining an Interface

// An interface is defined using the interface keyword followed by 
// the interface name and the structure of the object it describes. 
// That is: interface, name, structure of structure

// When an Interface is created, an object is created to implement it

// Define an interface for a User
interface User {
    readonly userid: number;
    name: string;
    age: number;
    email: string;
    position?: string;

}
// The interface above has 3 properties, name, age and email
// The type of each property is: string, number and string respectively.
// A property can be optional or read-only
// The user id is a read only property
// position is an optional property
// Know how to create an object uses the interface

// Create an object that implements the User interface
let user: User = {
    userid: 404,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

console.log(user.name); // Outputs: "John Doe"
console.log(user.age); // Outputs: 30
console.log(user.email); // Outputs: "john.doe@example.com"


// Methods in Interfaces
// Interfaces can also define methods. 
// The methods can have type annotations for parameters and return types.
// The methods are implement like the functions

// Define an interface with a method
interface Greeter {
    greet(name: string): string;
}

// Create an object that implements the Greeter interface
let greeter: Greeter = {
    greet(name: string) {
        return `Hello, ${name}!`;
    }
};

console.log(greeter.greet("World")); // Outputs: "Hello, World!"

// Extending Interfaces
// Interfaces can extend other interfaces, 
// allowing you to build more complex types from simpler ones.

// Define a base interface
//First define the base interface
interface Person {
    name: string;
    age: number;
}

// Extend the Person interface
// Now, you can extend the base interface
// Just like in classes
interface Employee extends Person {
    position: string;
}

// Create an object that implements the Employee interface
let employee: Employee = {
    name: "Bob",
    age: 25,
    position: "Engineer"
};

console.log(employee.name); // Outputs: "Bob"
console.log(employee.age); // Outputs: 25
console.log(employee.position); // Outputs: "Engineer"


// Hybrid Interfaces
//Example: Interfaces can describe objects that are both functions and have properties.

// Define an interface for a function with properties
interface Counter {
   (start: number): number;
   interval: number;
   reset(): void;
}
// In the above start is a parameter, tells the function part
// Also, interval is a property, reset is a method

// Create an object that implements the Counter interface
let counter: Counter = ((start: number) => {
    console.log(`Counter started at ${start}`);
    return start;
}) as Counter;

// Note the structure: let varaible: Interface name = (object) as Interface name
// Note how the parameter (start: number) is passed
// Let's say:
counter.interval = 1000;
counter.reset = () => {
    console.log("Counter reset");
};

//Since we have already defined the 'start' let's run:
console.log(counter(10)); // The function part, taking 10 as start parameter
// console.log(counter(10)); Outputs: "Counter started at 10"
console.log(counter.interval); // Outputs: 1000
counter.reset(); // Outputs: "Counter reset"


// Indexable Interface Types
// Interfaces can describe types that can be 
// indexed like an array or object with dynamic keys.

// Define an interface for an indexable type
interface StringArray {
    [index: number]: string; // An index will be assigned to all the array elements
}

// Create an array that implements the StringArray interface
let strArray: StringArray = ["James", "Alice", "David"]

console.log(strArray[0]); // Outputs: "James"
console.log(strArray[1]); // Outputs: "Alice"

// Let's Define an interface for an object with dynamic keys
interface Dictionary {
    [key: string]: string;
}

// Create an object that implements the Dictionary interface
let myDictionary: Dictionary = {
    one: "James",
    two: "Alice",
    three: "David"
}

console.log(myDictionary["one"]); // Outputs: "James"
console.log(myDictionary["two"]); // Outputs: "Alice"