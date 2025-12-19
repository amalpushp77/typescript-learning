// Operators in TypeScript
// Reference:
// https://www.typescripttutorial.net/

/*
IMPORTANT NOTE:
TypeScript does NOT introduce new runtime operators.
All operators behave exactly like JavaScript.
TypeScript only adds type checking at compile time.
*/

/*       
1. Arithmetic operators
2. Assignment operators
3. Comparison operators
4. Logical operators
5. Identity operators
6. Membership operators
7. Bitwise operators
8. Type-related operators
9. Conditional operator
10. Nullish coalescing
11. Optional chaining
*/

// =====================================================================
// 1. Arithmetic operators – used with number datatype
// =====================================================================

let n1: number = 8;
let n2: number = 3;

console.log(n1 + n2); // addition
console.log(n1 - n2); // subtraction
console.log(n1 * n2); // multiplication
console.log(n1 / n2); // division
console.log(n1 % n2); // modulus (remainder)
console.log(n1 ** n2); // power

let a: number = 5;
console.log(++a); // pre-increment
console.log(a++); // post-increment
console.log(--a); // pre-decrement
console.log(a--); // post-decrement

// ---------------------------------------------------------------------
// Modulus (%) in detail  (IMPORTANT – different from Python)
// ---------------------------------------------------------------------
/*
1. 8 % 3 = 2
2. 3 % 8 = 3
   (Numerator < Denominator → Numerator is remainder)

3. -8 % 3 = -2
   (Sign of remainder = sign of numerator)

4. 8 % -3 = 2

5. 3 % -8 = 3

6. -3 % 8 = -3

7. 0 % 6 = 0 (always)

8. 6 % 0 = NaN
   (No error in TypeScript / JavaScript)
*/

// ---------------------------------------------------------------------
// Floor division note
// ---------------------------------------------------------------------
/*
TypeScript does NOT have // operator.
Use Math.floor():

Math.floor(8 / 3) = 2
Math.floor(-8 / 3) = -3
*/

// =====================================================================
// 2. Assignment operators
// =====================================================================

let x: number = 10;

x += 5;   // x = x + 5
x -= 3;   // x = x - 3
x *= 2;   // x = x * 2
x /= 4;   // x = x / 4
x %= 3;   // x = x % 3
x **= 2;  // x = x ** 2

// Logical assignment operators

/*
&&=  → assign RHS only if LHS is truthy
||=  → assign RHS only if LHS is falsy
??=  → assign RHS only if LHS is null or undefined
*/

let la: any;

la = true;
la &&= 10; // 10

la = 0;
la ||= 20; // 20

let na: number | null | undefined;

na = null;
na ??= 30; // 30

na = 0;
na ??= 40; // 0 (not replaced)

// =====================================================================
// 3. Comparison operators
// =====================================================================

/*
Loose equality (==)
Type conversion happens
Not recommended
*/

console.log(5 == "5"); // true
console.log(true == 1); // true
console.log(null == undefined); // true

/*
Strict equality (===)
Checks value + type
Recommended in TypeScript
*/

console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(null === undefined); // false

/*
Inequality
*/

console.log(5 != "5"); // false
console.log(5 !== "5"); // true

console.log(6 > 5); // true
console.log(6 < 5); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false

// =====================================================================
// 4. Logical operators
// =====================================================================

console.log(true && false); // AND
console.log(true || false); // OR
console.log(!true); // NOT

/*
Short-circuit behavior:
AND → stops at first false
OR  → stops at first true
*/

// =====================================================================
// 5. Identity operators (reference comparison)
// =====================================================================

let obj1 = { value: 10 };
let obj2 = { value: 10 };
let obj3 = obj1;

console.log(obj1 === obj2); // false (different memory)
console.log(obj1 === obj3); // true (same memory)

// =====================================================================
// 6. Membership operators
// =====================================================================

/*
"in" → works with objects
includes() → arrays & strings
*/

let student = {
  name: "Aman",
  age: 20
};

console.log("name" in student); // true
console.log("marks" in student); // false

console.log([1, 2, 3].includes(2)); // true
console.log("typescript".includes("script")); // true

// =====================================================================
// 7. Bitwise operators (32-bit signed integers)
// =====================================================================

console.log(5 & 1); // AND
console.log(5 | 1); // OR
console.log(5 ^ 1); // XOR
console.log(~5); // NOT
console.log(5 << 1); // Left shift
console.log(5 >> 1); // Right shift
console.log(5 >>> 1); // Zero-fill right shift

// =====================================================================
// 8. Type-related operators (TypeScript usage)
// =====================================================================

/*
typeof → runtime type check
*/

let unknownValue: unknown = "TypeScript";

if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}

/*
instanceof → object check
*/

let arr: number[] = [1, 2, 3];

if (arr instanceof Array) {
  console.log("This is an array");
}

/*
Type assertion → compile-time only
*/

let anyValue: any = "Hello";
let length: number = (anyValue as string).length;
console.log(length);

// =====================================================================
// 9. Conditional (Ternary) operator
// =====================================================================

let age: number = 18;

let result: string = age >= 18 ? "Eligible" : "Not Eligible";
console.log(result);

// =====================================================================
// 10. Nullish coalescing operator (??)
// =====================================================================

/*
Returns RHS only if LHS is null or undefined
*/

let val: number | null | undefined;

val = null;
console.log(val ?? 50); // 50

val = undefined;
console.log(val ?? 50); // 50

val = 0;
console.log(val ?? 50); // 0

// =====================================================================
// 11. Optional chaining operator (?.)
// =====================================================================

interface User {
  name: string;
  address?: {
    city?: string;
  };
}

let user: User = { name: "Rahul" };

console.log(user.address?.city); // undefined (no error)

// =====================================================================
// END OF FILE
// =====================================================================
