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




