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
