// Loop Statements in TypeScript
// Covers ALL loop-related constructs used in TypeScript / JavaScript
// to run the compiler we must run first== tsc "Loops statement.ts"
// then == node "Loops statement.js"
/*
Loop Statements in TypeScript

1. for loop
2. while loop
3. do–while loop
4. for...of loop
5. for...in loop
6. break statement
7. continue statement
8. Nested loops
9. Labeled loops
10. Array forEach loop
*/
/*
IMPORTANT NOTE:
TypeScript does NOT introduce new loops.
All loops behave exactly like JavaScript.
TypeScript only adds type safety.
*/
// ================================================================
// 1. for loop
// ================================================================
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
/*
Output:
1
2
3
4
5
*/
// ================================================================
// 2. while loop
// ================================================================
var w = 1;
while (w <= 3) {
    console.log(w);
    w++;
}
/*
Output:
1
2
3
*/
// ================================================================
// 3. do–while loop
// ================================================================
var d = 1;
do {
    console.log(d);
    d++;
} while (d <= 3);
/*
Output:
1
2
3

Explanation:
Executes at least once
*/
// ================================================================
// 4. for...of loop (VALUES)
// ================================================================
var fruits = ["Apple", "Banana", "Mango"];
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
/*
Output:
Apple
Banana
Mango
*/
// ================================================================
// 5. for...in loop (KEYS / INDEXES)
// ================================================================
var user = {
    name: "Rahul",
    age: 21,
    city: "Nagpur"
};
for (var key in user) {
    console.log(key + " : " + user[key]);
}
/*
Output:
name : Rahul
age : 21
city : Nagpur
*/
// ================================================================
// 6. break statement
// ================================================================
for (var n = 1; n <= 5; n++) {
    if (n === 3)
        break;
    console.log(n);
}
/*
Output:
1
2
*/
// ================================================================
// 7. continue statement
// ================================================================
for (var n = 1; n <= 5; n++) {
    if (n === 3)
        continue;
    console.log(n);
}
/*
Output:
1
2
4
5
*/
// ================================================================
// 8. Nested loops
// ================================================================
for (var i = 1; i <= 2; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log("i =", i, "j =", j);
    }
}
/*
Output:
i = 1 j = 1
i = 1 j = 2
i = 1 j = 3
i = 2 j = 1
i = 2 j = 2
i = 2 j = 3
*/
// ================================================================
// 9. Labeled loops
// ================================================================
outerLoop: for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        if (i === 2 && j === 2)
            break outerLoop;
        console.log("i =", i, "j =", j);
    }
}
/*
Output:
i = 1 j = 1
i = 1 j = 2
i = 1 j = 3
i = 2 j = 1
*/
// ================================================================
// 10. Array forEach loop
// ================================================================
var values = [1, 2, 3];
values.forEach(function (value) {
    console.log(value);
});
/*
Output:
1
2
3
*/
// ================================================================
// Infinite loop example (DO NOT RUN)
// ================================================================
/*
while (true) {
    console.log("Infinite Loop");
}
*/
// ================================================================
// END OF LOOP STATEMENTS IN TYPESCRIPT
// ================================================================
/*
FINAL SUMMARY:
1. All loops are same as JavaScript
2. TypeScript adds compile-time safety
3. for...of → values
4. for...in → keys / indexes
*/
