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