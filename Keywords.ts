// TypeScript Keywords 
// Reference: https://www.w3schools.com/typescript/
// we can run using  tsx keywords.ts
/*
TypeScript Keywords

1. let
2. const
3. var
4. type
5. interface
6. enum
7. any
8. unknown
9. never
10. void
11. boolean
12. number
13. string
14. array
15. tuple
16. union
17. literal
18. function
19. class
20. implements
21. extends
22. public
23. private
24. protected
25. readonly
*/

// ================================================================
// 1. let
// ================================================================
let age: number = 25;
age = 30;
console.log(age);

/*
1. Block scoped
2. Can be reassigned

Output:
30
*/

// ================================================================
// 2. const
// ================================================================
const pi: number = 3.14;
console.log(pi);

/*
1. Block scoped
2. Cannot be reassigned

Output:
3.14
*/

// ================================================================
// 3. var
// ================================================================
var city: string = "Delhi";
city = "Mumbai";
console.log(city);

/*
1. Function scoped
2. Avoid using in TypeScript

Output:
Mumbai
*/

// ================================================================
// 4. type
// ================================================================
type UserID = number | string;

let id1: UserID = 101;
let id2: UserID = "A102";
console.log(id1, id2);

/*
1. Creates custom type
2. Supports union & literals

Output:
101 A102
*/

// ================================================================
// 5. interface
// ================================================================
interface Person {
    name: string;
    age: number;
}

let p: Person = {
    name: "Rahul",
    age: 22
};

console.log(p);

/*
1. Used for object structure
2. Can be extended

Output:
{ name: 'Rahul', age: 22 }
*/

// ================================================================
// 6. enum
// ================================================================
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
console.log(move);

/*
1. Defines named constants
2. Improves readability

Output:
0
*/

// ================================================================
// 7. any
// ================================================================
let value: any = 10;
value = "Hello";
value = true;
console.log(value);

/*
1. Disables type checking
2. Avoid when possible

Output:
true
*/

// ================================================================
// 8. unknown
// ================================================================
let data: unknown = "TypeScript";

if (typeof data === "string") {
    console.log(data);
}

/*
1. Safer than any
2. Must be type-checked before use

Output:
TypeScript
*/

// ================================================================
// 9. never
// ================================================================
function throwError(msg: string): never {
    throw new Error(msg);
}

/*
1. Function never returns
2. Used for errors or infinite loops

Output:
(No output – program stops with error if called)
*/

// ================================================================
// 10. void
// ================================================================
function logMessage(): void {
    console.log("Hello TypeScript");
}

logMessage();

/*
1. Function returns nothing

Output:
Hello TypeScript
*/

// ================================================================
// 11. boolean
// ================================================================
let isLoggedIn: boolean = true;
console.log(isLoggedIn);

/*
1. Holds true or false

Output:
true
*/

// ================================================================
// 12. number
// ================================================================
let score: number = 99.5;
console.log(score);

/*
1. Supports integers & decimals

Output:
99.5
*/

// ================================================================
// 13. string
// ================================================================
let username: string = "Admin";
console.log(username);

/*
1. Text data type

Output:
Admin
*/

// ================================================================
// 14. array
// ================================================================
let numbers: number[] = [1, 2, 3, 4];
console.log(numbers);

/*
1. Array of same data type

Output:
[ 1, 2, 3, 4 ]
*/

// ================================================================
// 15. tuple
// ================================================================
let userInfo: [number, string] = [1, "Amit"];
console.log(userInfo);

/*
1. Fixed length
2. Fixed types

Output:
[ 1, 'Amit' ]
*/

// ================================================================
// 16. union
// ================================================================
let result: number | string;
result = 10;
console.log(result);
result = "Success";
console.log(result);

/*
1. Allows multiple types

Output:
10
Success
*/

// ================================================================
// 17. literal
// ================================================================
let status: "success" | "error";
status = "success";
console.log(status);

/*
1. Restricts to specific values

Output:
success
*/

// ================================================================
// 18. function
// ================================================================
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(2, 3));

/*
1. Type-safe parameters
2. Type-safe return

Output:
5
*/

// ================================================================
// 19. class
// ================================================================
class Student {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log("Hello " + this.name);
    }
}

let s1 = new Student("Ravi");
s1.greet();

/*
1. Blueprint of object
2. Supports OOP

Output:
Hello Ravi
*/

// ================================================================
// 20. implements
// ================================================================
interface Printable {
    print(): void;
}

class Report implements Printable {
    print(): void {
        console.log("Printing report");
    }
}

new Report().print();

/*
1. Class must follow interface structure

Output:
Printing report
*/

// ================================================================
// 21. extends
// ================================================================
class Animal {
    eat(): void {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Barking");
    }
}

let d1 = new Dog();
d1.eat();
d1.bark();

/*
1. Supports inheritance

Output:
Eating
Barking
*/

// ================================================================
// 22. public
// ================================================================
class Car {
    public model: string;

    constructor(model: string) {
        this.model = model;
    }
}

let c1 = new Car("BMW");
console.log(c1.model);

/*
1. Accessible everywhere
2. Default modifier

Output:
BMW
*/

// ================================================================
// 23. private
// ================================================================
class Bank {
    private balance: number = 1000;

    showBalance(): void {
        console.log(this.balance);
    }
}

new Bank().showBalance();

/*
1. Accessible only inside class

Output:
1000
*/

// ================================================================
// 24. protected
// ================================================================
class Account {
    protected amount: number = 500;
}

class Savings extends Account {
    show(): void {
        console.log(this.amount);
    }
}

new Savings().show();

/*
1. Accessible in subclass

Output:
500
*/

// ================================================================
// 25. readonly
// ================================================================
class Product {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}

let p1 = new Product(101);
console.log(p1.id);

/*
1. Value cannot be changed after initialization

Output:
101
*/

// ================================================================
// END OF TYPESCRIPT KEYWORDS
// ================================================================

/*
FINAL SUMMARY:
1. TypeScript keywords add type safety
2. Helps catch errors at compile time
3. Supports OOP, interfaces, and strong typing
4. Improves large-scale application development
*/
