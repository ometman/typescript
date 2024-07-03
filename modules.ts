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


// a. Default Exports
// Default exports are used when a module exports a single item as its main export. 
// You can only have one default export per module.