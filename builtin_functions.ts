/*
========================================================
 TypeScript Inbuilt (Built-in) Functions
========================================================
*/
// we can run these file using   deno run --allow-all builtin_functions.ts


// ================================================================
// 1. console.log()
// ================================================================s
console.log("Hello TypeScript");

/*
OUTPUT:
Hello TypeScript

Explanation:
1. Prints output to the console
2. Commonly used for debugging
3. Supports multiple values
*/

// ================================================================
// 2. alert()
// ================================================================
alert("Welcome to TypeScript");

/*
OUTPUT:
Popup message → "Welcome to TypeScript"

Explanation:
1. Displays a popup message
2. Execution pauses until OK is clicked
3. Available in browser environment
*/

// ================================================================
// 3. prompt()
// ================================================================
let userName: string | null = prompt("Enter your name");
console.log(userName);

/*
INPUT:
User enters → Rahul

OUTPUT:
Rahul

Explanation:
1. Takes input from user
2. Always returns string or null
3. TypeScript requires union type (string | null)
*/

// ================================================================
// 4. confirm()
// ================================================================
let isConfirmed: boolean = confirm("Are you sure?");
console.log(isConfirmed);

/*
INPUT:
OK → true
Cancel → false

OUTPUT:
true  (or false)

Explanation:
1. Returns true or false
2. Used for confirmation dialogs
*/

// ================================================================
// 5. parseInt()
// ================================================================
console.log(parseInt("123"));
console.log(parseInt("123abc"));

/*
OUTPUT:
123
123

Explanation:
1. Converts string to integer
2. Stops parsing at first non-numeric character
*/

// ================================================================
// 6. parseFloat()
// ================================================================
console.log(parseFloat("12.5"));
console.log(parseFloat("12.5abc"));

/*
OUTPUT:
12.5
12.5

Explanation:
1. Converts string to floating-point number
*/

// ================================================================
// 7. Number()
// ================================================================
console.log(Number("123"));
console.log(Number(true));
console.log(Number("abc"));

/*
OUTPUT:
123
1
NaN

Explanation:
1. Converts value to number
2. Returns NaN if conversion fails
*/

// ================================================================
// 8. String()
// ================================================================
console.log(String(100));
console.log(String(true));

/*
OUTPUT:
"100"
"true"

Explanation:
1. Converts value to string
*/

// ================================================================
// 9. Boolean()
// ================================================================
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));

/*
OUTPUT:
true
false
false

Explanation:
1. Converts value to boolean
2. false values → 0, "", null, undefined
*/

// ================================================================
// 10. isNaN()
// ================================================================
console.log(isNaN(Number("TS")));
console.log(isNaN(10));

/*
OUTPUT:
true
false

Explanation:
1. Checks whether value is NaN
2. Returns boolean
*/

// ================================================================
// 11. isFinite()
// ================================================================
console.log(isFinite(100));
console.log(isFinite(Infinity));

/*
OUTPUT:
true
false

Explanation:
1. Checks if number is finite
2. Infinity and NaN return false
*/

// ================================================================
// 12. setTimeout()
// ================================================================
setTimeout((): void => {
  console.log("Runs after 2 seconds");
}, 2000);

/*
OUTPUT (after 2 seconds):
Runs after 2 seconds

Explanation:
1. Executes function after given delay
2. Runs only once
*/

// ================================================================
// 13. setInterval()
// ================================================================
let intervalId: number = setInterval((): void => {
  console.log("Repeats every second");
}, 1000);

/*
OUTPUT:
Repeats every second
Repeats every second
Repeats every second
...

Explanation:
1. Executes function repeatedly
2. Returns interval ID
*/

// ================================================================
// 14. clearTimeout()
// ================================================================
let timeoutId: number = setTimeout(() => {
  console.log("This will not run");
}, 3000);

clearTimeout(timeoutId);

/*
OUTPUT:
No output

Explanation:
1. Cancels setTimeout before execution
*/

// ================================================================
// 15. clearInterval()
// ================================================================
clearInterval(intervalId);

/*
OUTPUT:
Interval stopped

Explanation:
1. Stops setInterval execution
*/

// ================================================================
// 16. Math Functions
// ================================================================
console.log(Math.max(10, 20, 30));
console.log(Math.min(5, 2, 8));
console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.random());

/*
OUTPUT:
30
2
5
8
0.xxxx (random number between 0 and 1)

Explanation:
1. Used for mathematical operations
2. Math methods are static
*/

// ================================================================
// 17. Date Functions
// ================================================================
let today: Date = new Date();

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());

/*
OUTPUT (example):
2025
11
26
4

Explanation:
1. Month starts from 0 (January)
2. Output depends on current system date
*/

// ================================================================
// 18. JSON Functions
// ================================================================
let user = {
  name: "jairam",
  age: 22
};

let jsonString: string = JSON.stringify(user);
let parsedUser: { name: string; age: number } = JSON.parse(jsonString);

console.log(jsonString);
console.log(parsedUser);

/*
OUTPUT:
{"name":"jairam","age":22}
{ name: "jairam", age: 22 }

Explanation:
1. JSON.stringify() → Object to JSON string
2. JSON.parse() → JSON string to object
*/
