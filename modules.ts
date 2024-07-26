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