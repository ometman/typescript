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
