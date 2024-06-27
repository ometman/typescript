// Generics
// Generics provide a way to create components that work with any data type. 
// This allows you to create reusable and flexible components.

function identity<T> (arg: T): T {
    return arg
}

let output = identity<string>("mystring") // type output is mystring
let output2 = identity<number>(42);         // type of output2 is 'number'
