// CLASSES
// Classes are a fundamental part of object-oriented programming (OOP) 
// and TypeScript enhances JavaScript's class-based system with additional features and type safety.
// They provide a blueprint for creating objects with predefined properties and methods.

// Key Concepts of Classes in TypeScript
// 1. Class Declaration: Means we are Defining the structure and behavior of an object.
// 2. Constructor: The constructor part of the class Initializes object properties.
// 3. Properties: Are the Variables attached to a class.
// 4. Methods: Functions attached to a class.
// 5. Access Modifiers: Control the visibility of properties and 
// methods (public, private, protected).
// 6. Inheritance: Allows classes to extend other classes.
// 7. Abstract Classes: Define methods that must be implemented by subclasses.
// 8. Static Properties and Methods: They belong to the class itself rather than instances.

// Definition of a Basic Class

class Person {
    // Properties
    name: string;
    age: number;

    // Constructor, used to initialize the properties
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an instance of the Person class
let person = new Person("John", 30);
person.greet(); // Outputs: "Hello, my name is John and I am 30 years old."


// Access Modifiers
// TypeScript provides public, private, and protected modifiers to 
// control access to properties and methods.

// a. Public
// public members are accessible from anywhere. 
// All class members are public by default.
// Example of public members
class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

let animal = new Animal("Dog");
console.log(animal.name); // Outputs: "Dog"
animal.speak(); // Outputs: "Dog makes a sound."

// Private
// private members are accessible only within the class they are declared.

class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    public deposit(amount: number) {
        this.balance += amount;
        console.log(`Deposited ${amount}, new balance is ${this.balance}`);
    }

    // Trying to access private member outside the class will cause an error
    // public showBalance() {
    //     console.log(this.balance);
    // }
}

let account = new BankAccount(1000);
account.deposit(500); // Outputs: "Deposited 500, new balance is 1500"
// console.log(account.balance) will give an error 
// Error: Property 'balance' is private and only accessible within class 'BankAccount'.

// Protected
// protected members are accessible within the class and by classes derived from it.

class Employee {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Manager extends Employee {
    constructor(name: string) {
        super(name);
    }

    public introduce() {
        console.log(`Hello, my name is ${this.name}, and I am a manager.`);
    }
}

let manager = new Manager("Alice");
manager.introduce(); // Outputs: "Hello, my name is Alice, and I am a manager."
// console.log(manager.name); // Error: Property 'name' is protected and only accessible within class 'Employee' and its subclasses.


// Getters and Setters
// Getters and setters allow you to define how properties are accessed and mutated.

class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    // Getter for area
    get area(): number {
        return this._width * this._height;
    }

    // Setter for width
    set width(value: number) {
        if (value <= 0) {
            throw new Error("Width must be positive");
        }
        this._width = value;
    }

    // Setter for height
    set height(value: number) {
        if (value <= 0) {
            throw new Error("Height must be positive");
        }
        this._height = value;
    }
}

let rect = new Rectangle(10, 20);
console.log(rect.area); // Outputs: 200
rect.width = 15;
console.log(rect.area); // Outputs: 300
// rect.height = -5; // Error: Height must be positive
// Note that Getters and Setters: Provide controlled access to properties.

