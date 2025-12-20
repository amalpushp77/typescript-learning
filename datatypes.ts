// ============================================================================
// DATA TYPES IN TYPESCRIPT
// Reference:
// https://www.typescripttutorial.net/
//
// IMPORTANT NOTE:
// TypeScript data types are used ONLY at compile time.
// They help catch errors before running the code.
// After compilation, all types are removed (JavaScript only).
// ============================================================================

/*
1. Primitive Data Types
2. Special Data Types
3. Object Data Types
4. Union & Literal Types
5. Type Aliases
6. Interfaces
7. Enums
8. Tuple
9. Array
10. Function Types
*/

// ============================================================================
// 1. PRIMITIVE DATA TYPES
// ============================================================================

// ---------------------------------------------------------------------------
// number
// ---------------------------------------------------------------------------

let num: number = 10;
let price: number = 99.99;
let negative: number = -5;

console.log(num, price, negative);

/*
In TypeScript:
- number includes integers & floating point numbers
- No separate int or float type
*/

// ---------------------------------------------------------------------------
// string
// ---------------------------------------------------------------------------

let firstName: string = "Rahul";
let message: string = "Welcome to TypeScript";
let template: string = `Hello ${firstName}`;

console.log(template);

// ---------------------------------------------------------------------------
// boolean
// ---------------------------------------------------------------------------

let isActive: boolean = true;
let isLoggedIn: boolean = false;

console.log(isActive, isLoggedIn);

// ============================================================================
// 2. SPECIAL DATA TYPES
// ============================================================================

// ---------------------------------------------------------------------------
// any
// ---------------------------------------------------------------------------

/*
any:
- Turns OFF type checking
- Should be avoided if possible
*/

let data: any = 10;
data = "hello";
data = true;

console.log(data);

// ---------------------------------------------------------------------------
// unknown
// ---------------------------------------------------------------------------

/*
unknown:
- Safer alternative to any
- Must be checked before use
*/

let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// ---------------------------------------------------------------------------
// void
// ---------------------------------------------------------------------------

/*
void:
- Used for functions that return nothing
*/

function printMessage(): void {
  console.log("This function returns nothing");
}

// ---------------------------------------------------------------------------
// null & undefined
// ---------------------------------------------------------------------------

let u: undefined = undefined;
let n: null = null;

// ============================================================================
// 3. OBJECT DATA TYPES
// ============================================================================

// ---------------------------------------------------------------------------
// object
// ---------------------------------------------------------------------------

let user: object = {
  name: "Amit",
  age: 22
};

console.log(user);

/*
object:
- Represents non-primitive types
- Does not describe structure
*/

// ---------------------------------------------------------------------------
// object with type annotation
// ---------------------------------------------------------------------------

let student: { name: string; age: number } = {
  name: "Ravi",
  age: 21
};

console.log(student);

// ============================================================================
// 4. ARRAY DATA TYPE
// ============================================================================

let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["A", "B", "C"];

console.log(numbers, names);

// Alternative syntax
let marks: Array<number> = [90, 80, 70];

// ============================================================================
// 5. TUPLE DATA TYPE
// ============================================================================

/*
Tuple:
- Fixed length array
- Fixed type order
*/

let person: [string, number] = ["Raj", 25];

console.log(person);

// ============================================================================
// 6. UNION TYPES
// ============================================================================

/*
Union:
- Variable can have multiple types
*/

let id: number | string;

id = 101;
id = "A101";

console.log(id);

// ============================================================================
// 7. LITERAL TYPES
// ============================================================================

/*
Literal:
- Variable can have ONLY specific values
*/

let direction: "left" | "right" | "up" | "down";

direction = "left";
// direction = "forward"; ❌ Error

// ============================================================================
// 8. TYPE ALIASES
// ============================================================================

/*
Type Alias:
- Create custom type
*/

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

let admin: User = {
  name: "Admin",
  age: 30,
  isAdmin: true
};

console.log(admin);

// ============================================================================
// 9. INTERFACES
// ============================================================================

/*
Interface:
- Used to define object structure
- Mostly used in real projects
*/

interface Product {
  id: number;
  name: string;
  price: number;
}

let item: Product = {
  id: 1,
  name: "Laptop",
  price: 50000
};

console.log(item);

// ============================================================================
// 10. ENUM DATA TYPE
// ============================================================================

/*
Enum:
- Collection of named constants
*/

enum Status {
  Pending,
  InProgress,
  Completed
}

let taskStatus: Status = Status.Pending;

console.log(taskStatus);

// ============================================================================
// 11. FUNCTION TYPES
// ============================================================================

/*
Function type:
- Define parameter types & return type
*/

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 3));

// ============================================================================
// 12. NEVER DATA TYPE
// ============================================================================

/*
never:
- Function never finishes
- Used for errors or infinite loops
*/

function throwError(message: string): never {
  throw new Error(message);
}

// ============================================================================
// END OF FILE
// ============================================================================
