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

// Inheritance
// Classes can extend other classes to inherit their properties and methods.

class ThePerson {
    constructor(public name: string, public age: number) {}

    public describe() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

class Student extends ThePerson {
    constructor(name: string, age: number, public studentId: number) {
        super(name, age);
    }

    public study() {
        console.log(`${this.name} is studying.`);
    }
}

let student = new Student("Bob", 20, 12345);
student.describe(); // Outputs: "Bob is 20 years old."
student.study(); // Outputs: "Bob is studying."

// Abstract Classes
// Abstract classes cannot be instantiated and 
// are meant to be extended by other classes. 
// They can define abstract methods that must be implemented by subclasses.
// Put abstract methods on abstract classes

abstract class TheAnimal {
    constructor(public name: string) {}

    abstract makeSound(): void;

    public move() {
        console.log(`${this.name} is moving.`);
    }
}

class Dog extends TheAnimal {
    constructor(name: string) {
        super(name);
    }

    public makeSound() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog("Buddy");
dog.makeSound(); // Outputs: "Buddy barks."
dog.move(); // Outputs: "Buddy is moving."



// Static Properties and Methods
// Static properties and methods belong to the class itself, 
// not to instances of the class.

class MathHelper {
    static PI: number = 3.14159;

    static calculateCircumference(diameter: number): number {
        return diameter * this.PI;
    }
}

console.log(MathHelper.PI); // Outputs: 3.14159
console.log(MathHelper.calculateCircumference(10)); // Outputs: 31.4159


// Summary
// Classes in TypeScript allow you to create blueprints for objects, 
// encapsulating data and behavior in a structured and organized way. 

// They bring the principles of object-oriented programming to TypeScript, 
// with additional type safety and features. Here’s a recap of the key concepts:

// Class Declaration: Defines the structure and behavior of an object.
// Constructor: Initializes object properties when an instance is created.
// Properties: Variables that hold data associated with the class.
// Methods: Functions that define the behavior of the class.
// Access Modifiers: Control visibility of properties and methods (public, private, protected).
// Getters and Setters: Provide controlled access to properties.
// Inheritance: Allows one class to extend another, inheriting its properties and methods.
// Abstract Classes: Define methods that must be implemented by subclasses, but cannot be instantiated themselves.
// Static Properties and Methods: Belong to the class itself rather than instances.



// Difference between Private and Abstract Members of a Class
// Private Members
// Visibility: Only accessible within the class they are defined in.
// Encapsulation: Helps in hiding the internal implementation and protects 
// data from unauthorized access or modification.
// Instance-Level: They are associated with each instance of the class. 
// Each instance has its own copy of private members.

class MyBankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    public deposit(amount: number) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    }

    public getBalance() {
        return this.balance;
    }
}

let myaccount = new MyBankAccount(1000);
account.deposit(500); // Deposited 500. New balance is 1500.
console.log(myaccount.getBalance()); // Outputs: 1500
// console.log(account.balance); 
// Error: Property 'balance' is private and only accessible within class 'BankAccount'.

// The balance property is private, meaning it can only be accessed 
// and modified through the deposit and getBalance methods.
// Direct access to balance from outside the class is not allowed, 
// ensuring encapsulation.



// Static Members

// Class-Level: They are associated with the class itself, 
// not with any particular instance.
// Shared: All instances of the class share the same static members.
// Direct Access: They can be accessed using the class 
// name rather than through an instance.

class MathsHelper {
    static PI: number = 3.14159;

    static calculateCircumference(diameter: number): number {
        return diameter * MathsHelper.PI;
    }
}

console.log(MathsHelper.PI); // Outputs: 3.14159
console.log(MathsHelper.calculateCircumference(10)); // Outputs: 31.4159

// You cannot access static members through an instance
let helper = new MathsHelper();
// console.log(helper.PI); // Error: Property 'PI' is a static member and cannot be accessed through an instance


// The PI property and calculateCircumference method are static, 
// meaning they belong to the MathHelper class itself.
// They are accessed directly through the class name (MathHelper) 
// and not through any instance.

// Differences Between private and static
// Aspect	private	static
// Visibility	Accessible only within the class they are defined in.	Accessible through the class name, not instances.
// Association	Tied to individual instances of the class.	Tied to the class itself, not to any instance.
// Usage	Used to hide and encapsulate data within a class.	Used for shared data or methods that are common to all instances.
// Access	Accessed through instance methods or properties.	Accessed directly through the class name.
// Inheritance	Not accessible outside the class, even in derived classes.	Inherited by derived classes but still accessed via the class name.
// Instance vs Class	Each instance has its own copy.	Only one copy exists for the entire class.


// Combined Example
// Here’s an example that combines both private and static members in a class:

class Employee {
    private id: number;
    private name: string;
    private static employeeCount: number = 0;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        Employee.employeeCount++;
    }

    public static getEmployeeCount(): number {
        return Employee.employeeCount;
    }

    public describe() {
        console.log(`Employee ID: ${this.id}, Name: ${this.name}`);
    }
}

let emp1 = new Employee(1, "Alice");
let emp2 = new Employee(2, "Bob");

emp1.describe(); // Outputs: Employee ID: 1, Name: Alice
emp2.describe(); // Outputs: Employee ID: 2, Name: Bob

console.log(Employee.getEmployeeCount()); // Outputs: 2
