// ============================================================================
// CONDITIONAL STATEMENTS IN TYPESCRIPT
// ============================================================================
//
// IMPORTANT NOTE:
// TypeScript does NOT add new conditional statements.
// All conditionals behave exactly like JavaScript.
// TypeScript only adds TYPE SAFETY at compile time.
//
// ============================================================================
/*
1. if statement
2. if–else statement
3. if–else if–else ladder
4. Nested if statement
5. switch statement
6. Ternary (Conditional) operator
7. Truthy & Falsy values
8. Type Guards using conditionals (TypeScript specific)
*/
// ============================================================================
// 1. if STATEMENT
// ============================================================================
var age = 20;
if (age >= 18) {
    console.log("Eligible to vote");
}
/*
Explanation:
1. Condition inside if must be boolean
2. Code runs ONLY when condition is true
3. Curly braces {} define the block
*/
// ============================================================================
// 2. if–else STATEMENT
// ============================================================================
var marks = 35;
if (marks >= 40) {
    console.log("Pass");
}
else {
    console.log("Fail");
}
/*
Explanation:
1. if block → executes when condition is true
2. else block → executes when condition is false
*/
// ============================================================================
// 3. if–else if–else LADDER
// ============================================================================
var score = 78;
if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 75) {
    console.log("Grade B");
}
else if (score >= 60) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
/*
Explanation:
1. Conditions are checked from top to bottom
2. First true condition executes
3. Remaining conditions are skipped
*/
// ============================================================================
// 4. NESTED if STATEMENT
// ============================================================================
var username = "admin";
var password = "1234";
if (username === "admin") {
    if (password === "1234") {
        console.log("Login successful");
    }
    else {
        console.log("Incorrect password");
    }
}
else {
    console.log("Invalid username");
}
/*
Explanation:
1. if inside another if → Nested if
2. Used when conditions depend on each other
*/
// ============================================================================
// 5. switch STATEMENT
// ============================================================================
var day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid day");
}
/*
Explanation:
1. switch compares value using STRICT equality (===)
2. break stops execution
3. default runs if no case matches
*/
// ---------------------------------------------------------------------------
// switch WITHOUT break (Fall-through behavior)
// ---------------------------------------------------------------------------
var num = 2;
switch (num) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}
/*
Output:
Two
Three

Explanation:
Without break, execution continues to next cases
*/
// ============================================================================
// 6. TERNARY (CONDITIONAL) OPERATOR
// ============================================================================
var age2 = 16;
var result = age2 >= 18 ? "Adult" : "Minor";
console.log(result);
/*
Explanation:
1. Short form of if–else
2. Syntax:
   condition ? value_if_true : value_if_false
*/
// ---------------------------------------------------------------------------
// Nested ternary (NOT recommended – hard to read)
// ---------------------------------------------------------------------------
var n = 0;
var type = n > 0 ? "Positive" :
    n < 0 ? "Negative" :
        "Zero";
console.log(type);
// ============================================================================
// 7. TRUTHY & FALSY VALUES (VERY IMPORTANT)
// ============================================================================
/*
Falsy values in TypeScript / JavaScript:
false
0
-0
""  (empty string)
null
undefined
NaN

Everything else is truthy
*/
var value = "";
if (value) {
    console.log("Truthy value");
}
else {
    console.log("Falsy value");
}
// ============================================================================
// 8. TYPE GUARDS USING CONDITIONALS (TypeScript SPECIAL)
// ============================================================================
// ---------------------------------------------------------------------------
// typeof type guard
// ---------------------------------------------------------------------------
var unknownValue = "TypeScript";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
/*
Explanation:
1. typeof checks runtime type
2. Allows safe access to string methods
*/
// ---------------------------------------------------------------------------
// instanceof type guard
// ---------------------------------------------------------------------------
var arr = [1, 2, 3];
if (arr instanceof Array) {
    console.log("This is an array");
}
function isUser(obj) {
    return obj && typeof obj.name === "string";
}
var data = { name: "Rahul" };
if (isUser(data)) {
    console.log(data.name);
}
/*
Explanation:
1. Custom type guard returns boolean
2. Helps TypeScript understand object structure
*/
// ============================================================================
// COMMON MISTAKES (EXAM / INTERVIEW)
// ============================================================================
/*
1. Using = instead of ==
2. Using == instead of ===
3. Forgetting break in switch
4. Assuming empty array is falsy (it is truthy)
5. Accessing unknown type without checking
*/
// ============================================================================
// END OF CONDITIONAL STATEMENTS FILE
// ============================================================================
