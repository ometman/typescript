## Basic Types in TypeScript

---

TypeScript provides several basic types that are fundamental for defining and working with data in your programs.

### `number`
Represents numeric values, including integers and floating-point numbers.

```typescript
let myAge: number = 30;
let temperature: number = -10.5;
let distance: number = 1000000;
```

### `string`
Represents textual data.

```typescript
let firstName: string = "Alice";
let greeting: string = `Hello, ${firstName}!`;
let multiline: string = `This is a string
that spans multiple lines.`;
```

### `boolean`
Represents true or false values.

```typescript
let isActive: boolean = true;
let isCompleted: boolean = false;
```

### `undefined`
Represents a variable that has not been assigned a value.

```typescript
let notSet: undefined = undefined;
let value: undefined; // implicitly `undefined`
```

### `null`
Represents the intentional absence of any object value.

```typescript
let nullable: null = null;
let emptyValue: null = null;
```

### `any`
Represents any value, bypassing TypeScript’s type checking.

```typescript
let anything: any = "Could be anything";
anything = 42;
anything = true;
```

### `unknown`
Represents a value that could be of any type, but requires type checking before performing operations.

```typescript
let unknownValue: unknown = "Could be anything but safer than any";
unknownValue = 42;

// Requires type assertion or type checking before use
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}
```

---

**In summary, declaring variables with basic types:**

- let myAge: number = 30;
- let firstName: string = "Alice";
- let isActive: boolean = true;
- let notSet: undefined = undefined;
- let nullable: null = null;
- let something: any = "Could be anything";
- let unknownValue: unknown = "Could be anything but safer than any";
