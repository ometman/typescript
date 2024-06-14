//Boolean types
let isComplete: boolean = true;
let isNotComplete: boolean = false;

//String types
let name: string = "John Doe";

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

// function & argument
function Example() : void {
    console.log("This is an alert message")
}



