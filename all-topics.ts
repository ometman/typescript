// Typescript supports a set of basic types similar to JavaScript. 
// Let’s briefly look at each and how to declare each. 
// Note how each has the variable key word, variable name, a colon, type name, 
// assignment symbol and the value.
// So we have: keyword Variable: Type = Value

// TypeScript supports a set of basic types similar to JavaScript. Let's start with them:

// number: Represents all kinds of numbers, including integers and floating-point numbers.
// string: Represents textual data.
// boolean: Represents true or false.
// null and undefined: Represent absence of value.
// any: Represents any type and disables type checking.
// unknown: Represents any type but is safer than any.
// void: Represents the absence of any type, commonly used in functions that do not return a value.

//Basic Types
let myAge: number = 30;
let firstName: string = "Alice";
let isActive: boolean = true;
let notSet: undefined = undefined;
let nullable: null = null;
let something: any = "Could be anything";
let unknownValue: unknown = "Could be anything but safer than any";

//Arrays
// TypeScript supports typed arrays:
// Simple array type: Use the type followed by [].
let stringArray: string[] = ["Apple", "Mango"];
let numberArray: number[] = [1, 2, 3, 4, 10]
// Generic array type: Use Array<type>.
let mixArrayList: Array<string | number> = ["Apple", 1, 2, "Mango"];

// Tuples
// A tuple allows you to express an array with a fixed number of elements whose types are known.
let tuple1: [string, number] = ["Mango", 3]
let tuple2: [string, number, string] = ["Alice", 25, "David"];
// Example: Tuple with Four Elements
// Suppose we want to represent a tuple that holds the following information about a book:
// Title (string)
// Author (string)
// Publication Year (number)
// In Stock (boolean)

let book: [string, string,  number, boolean]
// Assign values to the tuple
book = ["1984", "George Orwell", 1949, true];

// Access elements of the tuple
let title = book[0]; // "1984"
let author = book[1]; // "George Orwell"
let publicationYear = book[2]; // 1949
let inStock = book[3]; // true

// Log the tuple elements
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);
console.log(`Publication Year: ${publicationYear}`);
console.log(`In Stock: ${inStock}`);

// Function returning a tuple
function getBookInfo(): [string, string, number, boolean] {
    return ["The Great Gatsby", "F. Scott Fitzgerald", 1925, false];
}
//Using the tuple function
let bookInfo = getBookInfo()
// Using destructuring to access values
let [thetitle, theauthor, year, available] = bookInfo




//Boolean types
let isComplete: boolean = true;
let isNotComplete: boolean = false;

//String types
let username: string = "John Doe";

//Number type
let age: number = 44;


//Any type
let unknownType: any = 4;
unknownType = "may be some string";
unknownType = 45; //surely a number
unknownType = false; // surely a boolean

// function & parameter/argument (optional & defined)
function Example() : void {
    console.log("This is example of no argument")
}

function warnUser() : void {
    console.log("This is a warning message")
}

function addTwoNumbers1(num1: number, num2?: number, num3: number = 0) : void {
    console.log(num1 + num2 + num3)
}
//'void' indicates we are not returning anything
addTwoNumbers1(2, 3) //returns 5, num3 has default value of 0
addTwoNumbers1(2, str, 6) //returns error, num2 is optional or must be a number
addTwoNumbers1(6, 8, 3) //returns 17, num3 default argument overruled

// 

type NumberOrString = string | number; //NumberOrString can be string or number
let NumberOrString = 5;
typeof NumberOrString ? console.log("It is a number") : console.log("Not a number")


//Arrays and Tuples

// TypeScript supports typed arrays:
// Simple array type: Use the type followed by [].
let stringArray: string[] = ["Apple", "Mango"];
let numberArray: number[] = [1, 2, 3, 4, 10]
// Generic array type: Use Array<type>.
let mixArrayList: Array<string | number> = ["Apple", 1, 2, "Mango"];

// Tuples
// A tuple allows you to express an array with a fixed number of elements whose types are known.
// Practical Use of Tuples
// Tuples are particularly useful when you want to return multiple values 
// from a function, maintain a fixed-size collection with known types, or 
// pass a structured set of data that doesn’t require the overhead of defining 
// a full-fledged interface or class.
let tuple1: [string, number] = ["Mango", 3]
let tuple2: [string, number, string] = ["Alice", 25, "David"];

// Example: Tuple with Four Elements
// Suppose we want to represent a tuple that holds the following information about a book:
// Title (string)
// Author (string)
// Publication Year (number)
// In Stock (boolean)

let book: [string, string,  number, boolean]
// Assign values to the tuple
book = ["1984", "George Orwell", 1949, true];

// Access elements of the tuple
let title = book[0]; // "1984"
let author = book[1]; // "George Orwell"
let publicationYear = book[2]; // 1949
let inStock = book[3]; // true

// Log the tuple elements
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);
console.log(`Publication Year: ${publicationYear}`);
console.log(`In Stock: ${inStock}`);

// Function returning a tuple
function getBookInfo(): [string, string, number, boolean] {
    return ["The Great Gatsby", "F. Scott Fitzgerald", 1925, false];
}
//Using the tuple function
let bookInfo = getBookInfo()
// Using destructuring to access values
let [thetitle, theauthor, year, available] = bookInfo






// Enums Types
// Enums allow you to define a set of named constants, 
// making it easier to document intent or create a set of distinct cases.
// Note: No equal or colon sign

// Enums in TypeScript are a powerful feature that allows you to define a set of named constants. 
// This can make your code more readable and maintainable, especially when you have variables 
// that can take one of a small set of specific values. 
// Enums are used to give more meaningful names to sets of numeric or string values.

// enum Direction {
//     up,
//     down,
//     left,
//     right
// }

// let direction = Direction.down
// let move: Direction = Direction.up

// Types of Enums
// Numeric, String, Heterogenous types

// Numeric Enums
// Numeric enums are the most common form of enums. By default, they 
// assign numeric values starting from 0 and increment by 1 for 
// each subsequent member. You can also assign specific numeric values to each member.
// Example of enums with default values
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

// Accessing enum values
// variable name, type name, value of variable
let direction: Direction = Direction.Up;
console.log(direction); // 0

// Assigning enum to a variable
let leftDirection: Direction = Direction.Left;
console.log(leftDirection); // 2

// Enum with customized values
enum CustomDirection {
    Up = 10,
    Down = 20,
    Left = 30,
    Right = 40
}

let customDir: CustomDirection = CustomDirection.Right;
console.log(customDir); // 40

//String types
// String enums allow you to assign string values to each member. 
// They are useful when the actual values don't have a numeric meaning 
// or when more descriptive values are needed.

//Example of String Enums
enum Status {
    success = "SUCCESS",
    failure = "FAILURE",
    pending = "PENDING"
}

let status1: Status = Status.failure
console.log(status1)
let status2: Status = Status.success
console.log(status2)

// Heterogeneous Enums
// Heterogeneous enums are less common and allow you to mix both 
// string and numeric values in the same enum. 
// It's generally recommended to avoid this unless it there's a specifi need

// Example of Heterogeneous Enums
enum MixedEnum {
    No = "0",
    Yes = "Yes"
}
console.log(MixedEnum.No); // 0
console.log(MixedEnum.Yes); // "YES"

// Advanced Enum Features

// 1. Reverse Mapping
// For numeric enums, TypeScript generates reverse mappings. 
// This allows you to get the name of an enum member from its value.
// Useful for debugging or logging purposes.

enum Color {
    Red,
    Green,
    Blue
}

console.log(Color.Red); // 0
console.log(Color[0]); // "Red"
console.log(Color[1]); // "Green"

// Enum as Types
// Enums can be used as types for variables, parameters, and return values in functions.

enum Shape {
    Circle,
    Square,
    Triangle
}

function drawShape(shape: Shape): void {
    switch (shape) {
        case Shape.Circle:
            console.log("Drawing a Circle");
            break;
        case Shape.Square:
            console.log("Drawing a Square");
            break;
        case Shape.Triangle:
            console.log("Drawing a Triangle");
            break;
    }
}



// Define the string enum
enum AppState {
    Initializing = "INITIALIZING",
    Ready = "READY",
    Loading = "LOADING",
    Error = "ERROR"
}

// Declare a variable of the enum type
let currentState: AppState;

// Assign an enum value to the variable
// currentState = AppState.Loading;
// console.log(currentState) gives "LOADING"

// Using the enum value in a switch statement
switch (currentState) {
    case AppState.Initializing:
        console.log("The application is initializing.");
        break;
    case AppState.Ready:
        console.log("The application is ready.");
        break;
    case AppState.Loading:
        console.log("The application is loading.");
        break;
    case AppState.Error:
        console.log("The application encountered an error.");
        break;
}


drawShape(Shape.Square); // Drawing a Square

// Define the numeric enum
enum UserRole {
    Admin,    // 0
    Editor,   // 1
    Viewer    // 2
}

// Declare a variable of the enum type
let currentUserRole: UserRole;

// Assign an enum value to the variable
currentUserRole = UserRole.Admin; // 0

console.log(currentUserRole); // Outputs: 0

// Using the enum value in a conditional statement
if (currentUserRole === UserRole.Admin) {
    console.log("The current user is an Admin.");
}



// Heterogenous Enums

// Define a heterogeneous enum
enum ResponseStatus {
    Success = 1,
    Failure = "FAILURE"
}

// Declare a variable of the enum type
let apiResponse: ResponseStatus;

// Assign an enum value to the variable
apiResponse = ResponseStatus.Success; // 1

console.log(apiResponse); // Outputs: 1

// Reassigning a different enum value
apiResponse = ResponseStatus.Failure; // "FAILURE"

console.log(apiResponse); // Outputs: "FAILURE"

// Using the enum value in a function
function handleResponse(status: ResponseStatus) {
    if (status === ResponseStatus.Success) {
        console.log("Operation was successful.");
    } else if (status === ResponseStatus.Failure) {
        console.log("Operation failed.");
    }
}

handleResponse(apiResponse);



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



// Generics
// Generics provide a way to create components that work with any data type. 
// This allows you to create reusable and flexible components.

function identity1<T> (arg: T): T {
    return arg
}

let output = identity1<string>("mystring") // type output is mystring
let output2 = identity1<number>(42);         // type of output2 is 'number'

// Generics in TypeScript allow you to create reusable components 
// that work with a variety of types while maintaining type safety. 
// They are a powerful feature that can be applied to functions, interfaces, classes, 
// and more, enabling you to write flexible and scalable code.

function identity2<T>(value: T): T {
    return value;
}

let num = identity2<number>(42); // num is of type number
let str = identity2<string>("Hello"); // str is of type string
let bool = identity2<boolean>(true); // bool is of type boolean

console.log(num); // Outputs: 42
console.log(str); // Outputs: Hello
console.log(bool); // Outputs: true

// In this example:

// The identity2 function is a generic function where T is a placeholder for any type.
// The function takes a parameter value of type T and returns a value of the same type.
// The function is called with specific types (number, string, and boolean).

// 2. Generic Interfaces
// Generic interfaces allow you to define an interface that can work with different types. 
// This is useful for defining the shape of data structures that can handle various types.

interface Container<T> {
    value: T;
}

let numberContainer: Container<number> = { value: 42 };
let stringContainer: Container<string> = { value: "Hello" };

console.log(numberContainer.value); // Outputs: 42
console.log(stringContainer.value); // Outputs: Hello

// The Container interface is generic and can hold a value of any type T.
// We create instances of Container for number and string types.

// 3. Generic Classes
// Generic classes are similar to generic interfaces but apply to classes. 
// They allow a class to operate with a variety of types.

class Box<T> {
    private contents: T;

    constructor(contents: T) {
        this.contents = contents;
    }

    public getContents(): T {
        return this.contents;
    }
}

let numberBox = new Box<number>(100);
let stringBox = new Box<string>("TypeScript");

console.log(numberBox.getContents()); // Outputs: 100
console.log(stringBox.getContents()); // Outputs: TypeScript

// The Box class is a generic class where T is a placeholder for any type.
// The class can store and return a value of type T.

// 4. Generic Constraints
// Sometimes you want to restrict the types that can be used with a generic. You can use 
// constraints to specify that a type must conform to a particular structure or interface.

interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
    console.log(item.length);
}

logLength({ length: 10, value: "Hello" }); // Outputs: 10
// logLength(42); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

// The Lengthwise interface defines a length property.
// The logLength function is constrained to accept only types that have a length property.
// This prevents types without a length property from being passed to the function.

// 5. Default Type Parameters
// You can provide default types for generic parameters, 
// which are used when no specific type is provided.

function createArray<T = string>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

let stringArray = createArray(3, "default"); // ['default', 'default', 'default']
let numberArray = createArray<number>(3, 42); // [42, 42, 42]

console.log(stringArray); // Outputs: ['default', 'default', 'default']
console.log(numberArray); // Outputs: [42, 42, 42]


// Generics in TypeScript allow you to create reusable components that 
// work with a variety of types while maintaining type safety. 
// They are a powerful feature that can be applied to 
// functions, interfaces, classes, and more, enabling you to write flexible and scalable code.

// Key Concepts of Generics
// Generic Functions: Functions that can operate on a variety of types.
// Generic Interfaces: Interfaces that define generic types.
// Generic Classes: Classes that work with generic types.
// Generic Constraints: Restricting the types that can be used with generics.
// Default Type Parameters: Providing default types for generics.
// Using Multiple Type Parameters: Handling more than one generic type.
// 1. Generic Functions
// Generic functions allow you to define a function that can work with 
// different types without losing type information. You define a generic 
// type using a placeholder (commonly T) and use it as a type for parameters or return values.

Example:

function identity<T>(value: T): T {
    return value;
}

let num = identity<number>(42); // num is of type number
let str = identity<string>("Hello"); // str is of type string
let bool = identity<boolean>(true); // bool is of type boolean

console.log(num); // Outputs: 42
console.log(str); // Outputs: Hello
console.log(bool); // Outputs: true


// In this example:

// The identity function is a generic function where T is a placeholder for any type.
// The function takes a parameter value of type T and returns a value of the same type.
// The function is called with specific types (number, string, and boolean).
// 2. Generic Interfaces
// Generic interfaces allow you to define an interface that can work with different types. 
// This is useful for defining the shape of data structures that can handle various types.

Example:

interface Container<T> {
    value: T;
}

let numberContainer: Container<number> = { value: 42 };
let stringContainer: Container<string> = { value: "Hello" };

console.log(numberContainer.value); // Outputs: 42
console.log(stringContainer.value); // Outputs: Hello

// In this example:

// The Container interface is generic and can hold a value of any type T.
// We create instances of Container for number and string types.

// 3. Generic Classes
// Generic classes are similar to generic interfaces but apply to classes. 
// They allow a class to operate with a variety of types.

Example:

class Box<T> {
    private contents: T;

    constructor(contents: T) {
        this.contents = contents;
    }

    public getContents(): T {
        return this.contents;
    }
}

let numberBox = new Box<number>(100);
let stringBox = new Box<string>("TypeScript");

console.log(numberBox.getContents()); // Outputs: 100
console.log(stringBox.getContents()); // Outputs: TypeScript

// In this example:

// The Box class is a generic class where T is a placeholder for any type.
// The class can store and return a value of type T.

// 4. Generic Constraints
// Sometimes you want to restrict the types that can be used with a generic. 
// You can use constraints to specify that a type must conform to a particular 
// structure or interface.

// Example:

interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
    console.log(item.length);
}

logLength({ length: 10, value: "Hello" }); // Outputs: 10
// logLength(42); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
// In this example:

// The Lengthwise interface defines a length property.
// The logLength function is constrained to accept only types that have a length property.
// This prevents types without a length property from being passed to the function.

// 5. Default Type Parameters
// You can provide default types for generic parameters, 
// which are used when no specific type is provided.

// Example:

function createArray<T = string>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

let stringArray = createArray(3, "default"); // ['default', 'default', 'default']
let numberArray = createArray<number>(3, 42); // [42, 42, 42]

console.log(stringArray); // Outputs: ['default', 'default', 'default']
console.log(numberArray); // Outputs: [42, 42, 42]

// In the above example:
// The createArray function has a default type parameter T set to string.
// When no type is specified, string is used as the default type.

// 6. Using Multiple Type Parameters
// You can define functions, interfaces, or classes with multiple generic type parameters. 
// This is useful when you need to work with multiple types.

function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

let numberStringPair = pair<number, string>(1, "one");
let booleanArrayPair = pair<boolean, number[]>(true, [1, 2, 3]);

console.log(numberStringPair); // Outputs: [1, 'one']
console.log(booleanArrayPair); // Outputs: [true, [1, 2, 3]]

// In this example:

// The pair function accepts two type parameters, T and U.
// It returns a tuple containing values of types T and U.

// 7. Advanced Generics Usage
// Generics can be combined with other TypeScript features 
// for more advanced use cases:

// a. Generic Classes with Constraints

class Collection<T extends { id: number }> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    find(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
}

let collection = new Collection<{ id: number, name: string }>();
collection.add({ id: 1, name: "Item 1" });
collection.add({ id: 2, name: "Item 2" });

console.log(collection.find(1)); // Outputs: { id: 1, name: 'Item 1' }

// b. Generic Interfaces with Multiple Constraints

interface HasId {
    id: number;
}

interface HasName {
    name: string;
}

function display<T extends HasId & HasName>(obj: T): void {
    console.log(`ID: ${obj.id}, Name: ${obj.name}`);
}

display({ id: 123, name: "Alice" }); // Outputs: ID: 123, Name: Alice
// The generic type T must have both id and name properties.

// Summary
// Generics in TypeScript provide a powerful way to create reusable and flexible components. 
// By using generics, you can write code that can operate on various 
// types while ensuring type safety. Here’s a quick recap of the key points:

// Generic Functions: Functions that can accept parameters and return values 
// of any type specified at the call site.
// Generic Interfaces: Interfaces that can define a generic type.
// Generic Classes: Classes that can operate with different types.
// Generic Constraints: Restricting the types that can be used with generics 
// to those that meet specific criteria.
// Default Type Parameters: Providing default types for generics.
// Using Multiple Type Parameters: Handling more than one generic type 
// in a single declaration.
// These concepts make generics an essential feature for building scalable 
// and maintainable applications in TypeScript.


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


// Combining Multiple Interfaces
// Multiple interfaces can be used to create a 
// more comprehensive type by combining their properties.

// Defining multiple interfaces
interface Name {
    firstName: string;
    lastName: string;
}

interface Address {
    city: string;
    country: string;
}

//Combing them into one by extending
interface PersonDetails extends Name, Address {
    age: number;
}

//Create an object to implement the interface
let personDetails: PersonDetails = {
    firstName: "Jane",
    lastName: "Doe",
    city: "New York",
    country: "USA",
    age: 28
}

console.log(personDetails.firstName); // Outputs: "Jane"
console.log(personDetails.city); // Outputs: "New York"

// Interface vs Type Alias
// In TypeScript, interface and type can often be used interchangeably. 
// However, there are some differences and use cases:

// Typically, Interface is used to describe the shape of 
// objects and can be extended or implemented.

// Type Alias is More versatile, can be used to
// define union types, intersections, primitive types, and more.
// We shall look at them later.

// Define a type alias
type Point = {
    x: number;
    y: number;
};

// Create an object that matches the type alias
let point: Point = {
    x: 10,
    y: 20
};

console.log(point.x); // Outputs: 10
console.log(point.y); // Outputs: 20

// Type alias for a union type
type ID = number | string;

let id1: ID = 123;
let id2: ID = "ABC123";

console.log(id1); // Outputs: 123
console.log(id2); // Outputs: "ABC123"

// Summary
// Interfaces in TypeScript are a powerful tool for defining the shape and structure of objects. 
// They help enforce type safety and clarity in your code. Here’s a quick recap of what we covered:

// Basic Interfaces: Define the shape of objects with specific property types.
// Optional Properties: Allow some properties to be optional.
// Readonly Properties: Define properties that can’t be changed after the object is created.
// Methods: Include methods in interfaces to describe object behavior.
// Extending Interfaces: Build complex types by extending simpler ones.
// Hybrid Types: Describe objects that are both functions and have properties.
// Indexable Types: Define objects that can be indexed with dynamic keys.
// Combining Interfaces: Combine multiple interfaces to describe more comprehensive types.
// Interface vs Type Alias: Understand when to use interfaces or type aliases based on use cases.
// By leveraging interfaces, you can create well-structured and type-safe applications 
// that are easier to understand and maintain.


// Modules
// Modules help organize code into reusable pieces. 
// TypeScript supports both internal and external modules.

// Modules are a fundamental part of TypeScript (and JavaScript) 
// that help you organize and manage code in a scalable way. 
// They allow you to split your code into manageable chunks and 
// encapsulate functionality, promoting reusability and maintainability.

// Key Concepts of Modules
// What is a Module?
// Exporting: Making parts of your code available to other modules.
// Importing: Using functionality from other modules.
// Default Exports: A single export per module.
// Named Exports: Multiple exports from a module.
// Re-exporting: Aggregating exports from multiple modules.
// Module Resolution: How TypeScript finds modules.
// Namespaces vs. Modules: Understanding the difference.

// 1. Internal modules:

namespace Utility {
    export function log(msg: string) {
        console.log(msg);
    }
}

Utility.log("Logging a message");


// 2. External modules:
// Use import and export to work with external modules.

// math.ts
export function add(x: number, y: number): number {
    return x + y;
}

// main.ts
import { add } from './math';
console.log(add(5, 10));



// 1. What is a Module?
// In TypeScript (and JavaScript), a module is a file that encapsulates 
// code and makes it reusable by exporting some of its contents. 
// A module can contain classes, functions, variables, interfaces, 
// and more. Modules are the basis for 
// creating large-scale applications by organizing code into discrete units.

// file: math.ts
export function add(a: number, b: number): number {
    return a + b;
}

// In this example:
// math.ts is a module.
// The add function is exported from this module, making it available to other modules.


// 2. Exporting
// Exporting is how you make functions, classes, variables, or interfaces available to other modules. 
// There are two main ways to export: default exports and named exports.

// a. Named Exports
// Named exports allow you to export multiple items from a module. 
// Each exported item must be explicitly named when imported.

// file: math.ts
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}


// b. Default Exports
// Default exports are used when a module exports a single item as its main export. 
// You can only have one default export per module.
// file: utility.ts
export default function greet(name: string): string {
    return `Hello, ${name}!`;
}


// 3. Importing
// Importing allows you to use the functionality provided by other modules. 
// There are different ways to import, depending on whether you're 
// importing named exports or a default export.

// Importing Named Exports
// When importing named exports, you use the names defined in the exporting module.

// file: app.ts
import { add, subtract } from './math';

console.log(add(2, 3)); // Outputs: 5
console.log(subtract(5, 2)); // Outputs: 3

// You can also rename imported items using the as keyword.

import { add as sum, subtract as difference } from './math';

console.log(sum(2, 3)); // Outputs: 5
console.log(difference(5, 2)); // Outputs: 3

// Importing Default Exports
// When importing a default export, you can choose any name for the imported item.
// file: app.ts
import greet from './utility';

console.log(greet("Alice")); // Outputs: Hello, Alice!


// 4. Re-exporting
// Re-exporting allows you to create a module that aggregates 
// exports from other modules. This is useful for creating a 
// central point of access for various functionalities.

// file: allFunctions.ts
export { add, subtract } from './math';
export { default as greet } from './utility';

// file: app.ts
import { add, subtract, greet } from './allFunctions';

console.log(add(2, 3)); // Outputs: 5
console.log(subtract(5, 2)); // Outputs: 3
console.log(greet("Alice")); // Outputs: Hello, Alice!

// In this example:

// allFunctions.ts re-exports functionality from math.ts and utility.ts.
// app.ts imports everything from allFunctions.ts.

// 5. Module Resolution
// Module resolution is the process TypeScript uses to find and load modules. 
// It involves interpreting the module paths and locating the corresponding files.

// a. Relative Paths: Used for modules in the same directory or a subdirectory. 
// They start with ./ or ../
import { add } from './math';


// b. Non-Relative Paths: Used for modules installed via package managers (like npm). 
// They don’t start with ./ or ../

import * as fs from 'fs'; // Node.js built-in module
import React from 'react'; // Installed via npm

// Note:
// TypeScript configuration (tsconfig.json) can influence how module resolution works, 
// particularly with the baseUrl and paths options.

// 6. Namespaces vs. Modules
// Namespaces and modules are both ways to organize code, 
// but they serve different purposes and have different use cases.

// a. Namespaces: Used to organize code within a single file or module. 
// They provide a way to group related functionality under a single namespace. 
// They are often used in older codebases or when 
// working with large libraries that need internal structuring.

namespace Utilities {
    export function logMessage(message: string) {
        console.log(message);
    }
}

Utilities.logMessage("Hello, World!"); // Outputs: Hello, World!


// b. Modules: Used to organize code across multiple files. 
// They are the modern standard for code organization 
// and are preferred over namespaces for new code.



// 7. Module Systems in TypeScript
// TypeScript supports multiple module systems, including:

// CommonJS: Used in Node.js applications (module.exports and require).
// ES6 Modules: The standard for JavaScript modules (import and export).
// AMD: Asynchronous Module Definition, used in browsers.
// UMD: Universal Module Definition, compatible with both CommonJS and AMD.
// You can specify the module system TypeScript should use in the tsconfig.json 
// file under the module option.

{
    "compilerOptions": {
        "module": "commonjs" // or "es6", "amd", "umd"
    }
}



// 8. Putting It All Together: An Example Project
// Here’s a small example of how modules can be organized in a TypeScript project:

// file: math.ts
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

// file: utility.ts
export default function greet(name: string): string {
    return `Hello, ${name}!`;
}

// file: index.ts
import { add, subtract } from './math';
import greet from './utility';

console.log(add(2, 3)); // Outputs: 5
console.log(subtract(5, 2)); // Outputs: 3
console.log(greet("Alice")); // Outputs: Hello, Alice!


// In the above example:

// math.ts exports two functions using named exports.
// utility.ts exports a single function as the default export.
// index.ts imports the functions from math.ts and utility.ts and uses them.

// 9. Summary
// Modules in TypeScript are essential for structuring and managing large codebases. 
// They help encapsulate functionality, promote code reuse, and provide clear 
// interfaces for different parts of your application. Here's a quick recap of the key points:

// What is a Module?: A file that encapsulates code and exports some of its parts.
// Exporting: Making functions, classes, variables, or interfaces available to other modules.
// Importing: Using functionality from other modules.
// Default Exports: A single main export from a module.
// Named Exports: Multiple named exports from a module.
// Re-exporting: Aggregating and re-exporting from multiple modules.
// Module Resolution: The process TypeScript uses to locate and load modules.
// Namespaces vs. Modules: Namespaces are for internal organization; modules are for 
// external code management.
// Understanding these concepts is crucial for effectively organizing and maintaining 
// your TypeScript projects.


// 9. TypeScript Configuration
// TypeScript is configured using a tsconfig.json file. 
// This file defines the root files and the compiler options 
// required to compile the project.

{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "outDir": "./dist",
        "rootDir": "./src"
    },
    "include": ["src/**/*.ts"]
}


// tsc


// This command reads the tsconfig.json file 
// and compiles the project according to its specifications.