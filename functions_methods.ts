// Functions & Methods in TypeScript
// to run the compiler we must run first == tsc "Functions_Methods.ts"
// then == node "Functions_Methods.js"

/*
Functions & Methods in TypeScript

1. Simple Function
2. Function with Parameters
3. Function with Return Type
4. Arrow Function
5. Optional Parameters
6. Default Parameters
7. Rest Parameters
8. Anonymous Function
9. Function Overloading
10. Methods inside Object
11. Methods inside Class
*/

/*
IMPORTANT NOTE:
TypeScript does NOT introduce new functions.
All functions work like JavaScript.
TypeScript only adds:
- Type checking
- Return type safety
- Parameter safety
*/

// ================================================================
// 1. Simple Function (No parameters)
// ================================================================
function greet(): void {
    console.log("Hello TypeScript");
}

greet();

/*
Output:
Hello TypeScript
*/

// ================================================================
// 2. Function with Parameters
// ================================================================
function add(a: number, b: number): void {
    console.log(a + b);
}

add(5, 3);

/*
Output:
8
*/

// ================================================================
// 3. Function with Return Type
// ================================================================
function multiply(x: number, y: number): number {
    return x * y;
}

let result = multiply(4, 5);
console.log(result);

/*
Output:
20
*/

// ================================================================
// 4. Arrow Function
// ================================================================
const subtract = (a: number, b: number): number => {
    return a - b;
};

console.log(subtract(10, 4));

/*
Output:
6
*/

// ================================================================
// 5. Optional Parameters (?)
// ================================================================
function displayName(firstName: string, lastName?: string): void {
    console.log(firstName, lastName);
}

displayName("Rahul");
displayName("Rahul", "Sharma");

/*
Output:
Rahul undefined
Rahul Sharma
*/

// ================================================================
// 6. Default Parameters
// ================================================================
function power(base: number, exponent: number = 2): number {
    return base ** exponent;
}

console.log(power(5));
console.log(power(5, 3));

/*
Output:
25
125
*/

// ================================================================
// 7. Rest Parameters (...)
// ================================================================
function sumAll(...numbers: number[]): number {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum;
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));

/*
Output:
6
100
*/

// ================================================================
// 8. Anonymous Function
// ================================================================
let message = function (): void {
    console.log("This is an anonymous function");
};

message();

/*
Output:
This is an anonymous function
*/

// ================================================================
// 9. Function Overloading
// ================================================================

// Function signatures
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

// Function implementation
function combine(a: any, b: any): any {
    return a + b;
}

console.log(combine(10, 20));
console.log(combine("Hello ", "World"));

/*
Output:
30
Hello World
*/

// ================================================================
// 10. Methods inside Object
// ================================================================
let calculator = {
    num1: 10,
    num2: 5,
    add(): number {
        return this.num1 + this.num2;
    },
    subtract(): number {
        return this.num1 - this.num2;
    }
};

console.log(calculator.add());
console.log(calculator.subtract());

/*
Output:
15
5
*/

// ================================================================
// 11. Methods inside Class
// ================================================================
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log("Hello, my name is " + this.name);
    }
}

let p1 = new Person("Amit");
p1.greet();

/*
Output:
Hello, my name is Amit
*/

// ================================================================
// END OF FUNCTIONS & METHODS IN TYPESCRIPT
// ================================================================

/*
FINAL SUMMARY:
1. Functions are same as JavaScript
2. TypeScript adds type safety
3. Optional parameters use ?
4. Default parameters have values
5. Rest parameters use ...
6. Arrow functions use =>
7. Methods belong to objects or classes
*/
