# 🟨 50 JavaScript Interview Questions - Solved

This repository contains my solutions to **50 frequently asked JavaScript interview questions**, inspired by the **Sheryians Coding School** YouTube video.  
I solved each question step by step to strengthen my **JavaScript fundamentals** — covering basics, loops, arrays, functions, and problem-solving.

## 📖 Description

This repo is a collection of **practice problems** that helped me revise and improve my JS skills.  
The questions range from **basic console logs** and **type checks** to **loops, arrays, and functions**.  
It’s a perfect practice set for **beginners** preparing for interviews or revising JavaScript core concepts.

---

## 📂 Topics Covered

- ✅ Console, Variables, and Data Types  
- ✅ Operators & Expressions  
- ✅ Conditionals (if, else)  
- ✅ Loops (`for`, `while`, `do...while`, `for...of`, `for...in`)  
- ✅ Arrays (push, pop, slice, concat, includes, sort)  
- ✅ Objects and Iteration  
- ✅ Functions (declarations & arrow functions)  
- ✅ String Manipulation (reverse, startsWith, kebab-case)  
- ✅ Math & Logic (factorial, max numbers, area of circle)  

---

## 📝 Example Questions

Here are a few sample problems from the set:

```js
// Q1. Log your name and favourite hobby
console.log("Hey My Name is Jaid Khan And My Hobby is to build things with code");

// Q10. Log the result of 100 / 0 and observe the output
console.log(100 / 0);  // Infinity

// Q26. Create a for loop that calculates the factorial of 5
let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact *= i;
}
console.log(fact); // 120

// Q47. Write a function that accepts a string and returns its reverse
function stringReverse(str) {
    return str.split("").reverse().join("");
}
console.log(stringReverse("Javascript")); // tpircsavaJ
