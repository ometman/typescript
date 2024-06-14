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


//Boolean types
let isComplete: boolean = true;
let isNotComplete: boolean = false;

//String types
let username: string = "John Doe";

//Number type
let age: number = 44;

//Arrays
let strArrayList: string[] = ["Apple", "Mango"];
let numArrayList: number[] = [1, 2, 3, 4, 10]
let mixArrayList: Array<string | number> = ["Apple", 1, 2, "Mango"];
let tuple: [string, number] = ["Mango", 3]

//Object
enum Color { Red, Gold, Green }
let c: Color = Color.Red;
//let c: Color = Color.Gold;
//let c: Color = Color.Green;

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

