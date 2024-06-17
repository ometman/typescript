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
