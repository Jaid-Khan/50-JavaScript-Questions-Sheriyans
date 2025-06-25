// Qs. - 01. Log Your Name And Favourite Hobby To Your Console. 
// console.log("Hey My Name is Jaid Khan And My Hobby is to build things with code");

// Qs. - 02 Perform and log the result of 45 * 2 - 10
// console.log(45 * 2 - 10);

// Qs. - 03 Use console.log to display current year.
// let currentYear = new Date();
// console.log(currentYear.getFullYear())

// Qs. - 04 create two varibale for first and last name. concatenate and log them.
// let firstName = "Tony";
// let LastName = "Stark";
// console.log(firstName + " " + LastName); //OR
// console.log(`${firstName} ${LastName}`);

// Qs. - 05 Track the value of a varibale by logging it before and after updating.
// let varibale = 10;
// console.log(varibale);
// varibale = 25;
// console.log(varibale);

// Qs. - 06 Use console.error to stimulate an error message.
// console.error("Something Went Wrong!!");

// Qs. - 07 Log The Square of the number 12 to the console.
// console.log(12 * 12); //OR
// console.log(12 ** 2); 

// Qs. - 08 Print the type of a varibale holding a value true.
// let isPassed = true;
// console.log(typeof isPassed);

// Qs. - 09 Create a varibale holding your age and log whether is greater that 18;
// let age = 24;
// console.log(age > 18);

// Qs. - 10 Log The Result of 100 / 0 and observe the output.
// console.log(100 / 0);

// Qs. - 11 Declare a variable using let and log its value.
// let varName = "Hulk";
// console.log(varName); 

// Qs. - 12 Create a constant to store the value of Pi and log it.
// const pi = Math.PI;
// console.log(pi);
//OR
// const pi = 3.14;
// console.log(pi);

// Qs. - 13 Reassign a value to a varibale declared with let and log the result.
// let varAge = 34;
// varAge = 56;
// console.log(varAge);

// Qs. - 14 Check The Type of null and log it.
// console.log(typeof null);

// Qs. - 15 Create a variable with a number as a string (eg. "25") and log its type.
// let varibale = "25";
// console.log(typeof varibale);

// Qs. - 16 Use typeof to check the value of boolean variable.
// let bool = true;
// console.log(typeof bool);

// Qs. - 17 Create three variables of types - string, number, boolean and log their values.
// let string = "Hello";
// let num = 123;
// let isFollow = true;
// console.log(string, num, isFollow);

// Qs. - 18 Declare a variable without assigning a value and log its type.
// let x;
// console.log(typeof x);

// Qs. - 19 Create a variable with undefined and log its type.
// let variable = undefined;
// console.log(typeof variable);

// Qs. - 20 Use const to create an array. Try Reassigning the array and observe the error.
// const arr = [1, 2, 3, 4, 5];
// arr = [9, 8, 7, 6, ];
// Uncaught TypeError: Assignment to constant variable. at script.js:84:5

// Qs. - 21 Write a for loop to print numbers from 0 to 50.
// for(let i=0; i<=50; i++){
//     console.log(i);
// }

// Qs. - 22 Use The While loop to sum the numbers from 0 to 10.
// let num = 10;
// let i = 1;
// let sum = 0;
// while(i <= num){
//     sum = i + sum;
//     i++;
// }
//console.log(sum);


// Qs. - 23 Create a for...of loop to log each character of the string "Javascript";
// let string = "Javascript";
// for(let char of string){
//     console.log(char);
// }

// Qs. - 24 Write  a for loop that skips even numbers between 0 to 20.
// for(let i=0; i<=20; i++){
//     if(i % 2 != 0){
//         console.log(i);
//     };
// }

// Qs. - 25 Use a do...while loop to log numbers from 5 to 1.
// let i = 5;
// do{
//     console.log(i);
//     i--;
// }while(i>=1)

// Qs. - 26 Create a for loop that calculates the factorail 0f 5.
// let num = 5;
// let fact = 1;
// for(let i = 1; i <= num; i++){
//     fact = fact * i;
// };
// console.log(fact);

// Qs. - 27 Write a Nested loop to print a 3x3 grid of numbers.
// let hold = 1;
// for(let i=1; i<=3; i++){
//     let str = "";
//     for(let j=1; j<=3; j++){
//         str = str + hold + " ";
//         hold++;
//     }
//     console.log(str);
// }

// Qs. - 28 Use a for loop to reverse an array [1, 2, 3, 4].
// let arr = [1, 2, 3, 4, 5];
// let reversedArr = [];
// for(let i = arr.length -1; i>=0; i--){
//     reversedArr.push(arr[i])
// }
// console.log(reversedArr)

// Qs. - 29 Write a while loop that logs numbers from 1 to 100 divisible by 5.
// let i = 1;
// while(i<=100){
//     if(i % 5 === 0){
//         console.log(i);
//     }
//     i++;
// }

// Qs. - 30 Use a for....in loop to iterate over an object and log its keys.
// let person = {
//     Name : "Tony Stark",
//     Age : 32,
//     isIRonMan : true,
// };
// for(let info in person){
//     console.log(`Key = ${info} and Value = ${person[info]}`);
// }

// Qs. - 31 Create an array of your top 5 favourite movies and log it.
// let movies = ["ironMan", "Hulk", "Thor", "Black Panthar", "Captain America"];
// for(let movie of movies){
//     console.log(movie)
// }
// OR 
// let movies = ["ironMan", "Hulk", "Thor", "Black Panthar", "Captain America"];
// movies.forEach((movie) =>{
//     console.log(movie);
// })

// Qs. - 32 Find and log Second the Element of an array.
// let movies = ["ironMan", "Hulk", "Thor", "Black Panthar", "Captain America"];
// console.log(movies[2]);


// Qs. - 33 Add Two New Elements to the start of an array using unshift().
// let arr = ["SPIDERMAN", "HULK", "THOR"];
// arr.unshift("IRONMAN", "CAPTAIN AMERICA");
// console.log(arr)

// Qs. - 34 Remove the last elment of an array and log the updated array.
// let arr = [1, 2, 3, 4, 5, 6];
// arr.pop();
// console.log(arr)

// Qs. - 35 Use Slice to extract the first three elemenst of an array.
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0, 3);
// console.log(newArr)

// Qs. - 36 Find the index of specific element in an array Using .indexOf(). 
// let arr = ["ironMan", "Hulk", "Thor", "Black Panthar", "Captain America"];
// console.log(arr.indexOf("Thor"));

// Qs. - 37 Check if a value exists in an array using .includes().
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.includes(5));

// Qs. - 38 Combine Two Arrays [1, 2] and [3, 4] using .concat().
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// console.log(arr1.concat(arr2));

// Qs. - 39 Sort an Array of numbers [5, 2, 9, 1] in ascending order.
// let arr =  [5, 2, 9, 1];
// console.log(arr.sort());

// OR Using Loop To Sort The Array
// let arr = [5, 2, 9, 1];
// for (let j = 0; j <= arr.length; j++) {
//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }
//     }
// }
// console.log(arr);


// Qs. - 40 Write a program that creates copy of an array without mutating the original.
// let arr = [1, 2, 3, 4];
// let arr2 = [...arr];
// console.log(arr)
// arr2.pop();
// console.log(arr2)
// OR 
// let arr = [1, 2, 3, 4];
// let arr2 = []
// arr.forEach((value) =>{
//     arr2.push(value);
// })
// console.log(arr);
// arr2.pop();
// console.log(arr2)

// Qs. - 41 Write a function to check if a number is even or odd.
// function numChecker(num){
//     if(num % 2 === 0){
//         console.log("Number is Even")
//     }
//     else{
//         console.log("Number is Odd")
//     };
// }
// numChecker(24);

// Qs. - 42 Create a function to Calculate the area of a cricle with a given radius.

// function calArea(radius){
//     console.log(Math.PI * radius * radius); //Formula pi * r(sqaure)
// }
// calArea(12);

// Qs. - 43 Write a function that accepts an array and return the sum of it elements.
// function arrSum(arr){
//     sum = 0;
//     arr.forEach(function (value){
//         sum = sum +value;
//     })
//     console.log(sum);
// }
// arrSum([1, 4, 5, 6])

// Qs. - 44 Create a function that checks if a string starts with a specific character.
// let str = "Javascript";
// function startCheck(value){
//     console.log(str.toLowerCase().startsWith(value.toLowerCase()));
// }
// startCheck("java")
//OR 
// let str = "TONY";
// let Check = (value) =>{
//     console.log(str.toLowerCase().startsWith(value.toLowerCase()))
// }
// Check("tony")

// Qs. - 45 Write a function to find the maximum of two numbers.
// function maxNum(a,b){
//     if(a>b){
//         console.log(`Your Maximum Numbse is ${a}`)
//     }
//     else if(a<b){
//         console.log(`Your Maximum Numbse is ${b}`)
//     }
//     else{
//         console.log(`Boths are equal`);
//     }
// };
// maxNum(20, 20);

// Qs. - 46 Create a function that takes a number and return its factorial.
// let num = 4;
// let fact = 1;
// for(let i =1; i<=num; i++){
//     fact = fact * i;
// }
// console.log(fact)
//OR
// function getFact(num){
//     let fact = 1;
//     for(i=1; i<=num; i++){
//         fact = fact * i;
//     }
//     console.log(fact);
// }
// getFact(5);

// Qs. - 47 Write a function that accepts a string and returns its reverse.
// function stringReverse(str) {
//     let newStr = str.split("").reverse().join("");
//     console.log(newStr);
// }
// stringReverse("Javascript")

// Qs. - 48 Create a function to find the largest number in an array.
// function maxOfArr(arr){
//     let max = 0;
//     for(i=1; i<=arr.length; i++){
//         if(arr[i] > arr[max]){
//             max = i;
//         }
//     }
//     console.log(arr[max]);
// };
// maxOfArr([12, 43, 54, 87, 32, 1])

// Qs. - 49 Write a function that converts a string to kebab-case.
// function kebabCaseConverter(str){
//     console.log(str.split(" ").join("-"));
// }
// kebabCaseConverter("Javascript is a programming language")
//OR
// function kebabCaseConverter(str){
//     console.log(str.replaceAll(" ", "-"));
// }
// kebabCaseConverter("Javascript is a prgramming language")

// Qs. - 50 Create a function that logs "Hello World" Everytime it is called.
// function greet(){
//     console.log("Hello World");
// }
// greet()