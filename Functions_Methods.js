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
function greet() {
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
function add(a, b) {
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
function multiply(x, y) {
    return x * y;
}
var result = multiply(4, 5);
console.log(result);
/*
Output:
20
*/
// ================================================================
// 4. Arrow Function
// ================================================================
var subtract = function (a, b) {
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
function displayName(firstName, lastName) {
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
function power(base, exponent) {
    if (exponent === void 0) { exponent = 2; }
    return Math.pow(base, exponent);
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
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var n = numbers_1[_a];
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
var message = function () {
    console.log("This is an anonymous function");
};
message();
// Function implementation
function combine(a, b) {
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
var calculator = {
    num1: 10,
    num2: 5,
    add: function () {
        return this.num1 + this.num2;
    },
    subtract: function () {
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is " + this.name);
    };
    return Person;
}());
var p1 = new Person("Amit");
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
