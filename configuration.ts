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