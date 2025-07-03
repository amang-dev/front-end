// console.log("value of age is" , age);

// var age = 20

// console.log("value of age is" , age);

/* Hoisting
  
In JavaScript, hoisting is a behavior where variable and function declarations are moved to the top of their respective scopes during the compilation phase. 



 Execution Context are of two Types:
       1. Global Execution Context
       2. Function Execution Context

  Phases of the JavaScript Execution Context
     
        1. Creation Phase
                1. Memory 
                2. Code
        2. Execution Phase 
 
*/

//?----------------------------------------

// age= 100;

// console.log("value of age is" , age);

// let age = 20;

// console.log("value of age is" , age);

// Let and const Temporal dead zone

//? ***********************************************

// myFun()

// var myFun = function (){
//  console.log("First");
// }

// myFun();

// function myFun() {
//  console.log("Second");
// }

// myFun();

//? **************************************

// var variable = 10;

// (() => {
//   console.log(variable);

//   variable = 20;

//   console.log(variable);
// })(); //iife

// console.log(variable);
// var variable = 30;

// console.log(variable);

// foo = 30;

// console.log("foo", foo);

// var foo = 100;

// console.log("foo", foo);

//? *********************************

// variable = 10;

// (() => {
//         foo =100;
//         console.log(variable);
//         var foo = 100;
//         variable = 20;
//         console.log(variable);
// })();

// // console.log(foo);
// console.log(variable);
// var variable = 30;

//? *******************************\

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// var creates one i for the whole loop, so the final value (10) is printed every time.

// let creates a new i for each loop, so the correct numbers (0-9) are printed.

//? **********************************

// const aman = {
//   name: "aman gupta",
//   sayName: function () {
//     console.log(this.name);
//   },
// };

// aman.sayName()

// setTimeout(aman.sayName.bind(aman), 5000);

//? ******************************************

// const obj = {
//  height: 30,
// }
// console.log(obj.height);

// delete obj.height

// console.log(obj.height);

//? 1 . what is javascript

// Javascript is high level programming language. that is widely use to create interactive effect within web browser.

//? 2. What are templet litrels

// it is used to embedded variable and expression directly in to the string.

//? What is hoisting

//? Diff var let const

// if(true){
//   var a = 10;
//   let b = 20;
//   const c = 30;

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// var has function scope let and const has block scope

//?  primitive and non primitive

/* Primitive(immutable)can not be modified

   Number
   string 
   boolean
   Null 
   undefine
   symbol
   BigInt

   

Non Primitive
  Array
  Object
  Function
*/

// console.log(isNaN('123'));

//? What is null and undefined

// Both  indicated absense of a value.

//? What is Purpose of the Map Method in javascript?

// const number = [1,2,3,4,5]

// const double = number.map(num => num *2 )
// console.log(double);
// console.log(number);

//? What is Event Bubbling and event Capturing
// Capturing: Event travels top-down (outer to inner)

// Bubbling: Event travels bottom-up (inner to outer, default)


//? What are higher Order Function?

/* 
A Higher-Order Function is simply a function that:

Takes another function as an argument, OR

Returns another function.

*/

//? IIFE

// (function(){
//    console.log("Hello Word");
// }) ();

//? sometime global scope variable pollute the function. it over come pollutionn  from global scope we use IIFE.

//? What is Clouser

// A closure is a function that remembers the variables from its outer function even after the outer function has finished executing.

// function outerFunc(){

//         let outerVar = "i am outer var"

//         function innerFunc(){
//            console.log(outerVar);
//         }

//         return innerFunc
// }

// const clouser = outerFunc()

// clouser()

// function counter() {

//   let count = 0;

//   return {
//     increment: function () {
//       count++;
//       return count;
//     },

//     decrement: function () {
//       count--;
//       return count;
//     },

//     display: function () {
//       let message = "curr count val " + count;

//       return message;
//     },
//   };

// }

// counter()

// const myCounter = counter()

// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.decrement());
// console.log(myCounter.decrement());
// console.log(myCounter.display());

//? How to SetTimeOut and SetInterval Work?

// const timerId = setTimeout(() =>{
//    console.log("After 2 ");
// },2000)

// clearInterval(timerId)

// const timerId = setInterval(()=>{
//         console.log("Every 2 sec");
// },2000)

// setTimeout(()=>{
//    clearInterval(timerId)
// },5000)

//? Explain the concept of promise in javascript?

/* A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation.

Pending
Resove
Reject



🚀 Why Use Promises?
✅ Avoids callback hell
✅ Improves readability & maintainability
✅ Works well with APIs & async tasks


.then() → Runs when the Promise is resolved

.catch() → Runs when the Promise is rejected

.finally() → Runs in both cases (optional)

*/

// const data = { name: "john", age: 30 };

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 2000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("error");
//   });

//? What is the use of async and await in javascript?

// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log("❌ Error " + error);
//   }
// }

// fetchData();

//? What is call , apply and Bind in javascript>

// call() lets you reuse functions with different objects by setting what this should refer to.

// call() is used to run a function and set the value of this manually — so the function behaves as if it belongs to a different object.

// function cook(ing1, ing2){

//         console.log(`${this.name} is having a meal with ${ing1} and ${ing2}`);
// }

// const adam ={
//         name: "adam"
// }

// cook.call(adam, "peanut", "Butter")
// cook.apply(adam, ["peanut", "Butter"])

// const cookforadam = cook.bind(adam, "halwa", "puri")

// cookforadam()

//? what is event delegation ?

// Event Delegation is a technique where you add a single event listener to a parent element, and it handles events for its child elements — even if the children are added later.

//? Explain the eventloop in javascript.

// How the Event Loop Works:
// Run normal (synchronous) code first — line by line.

// When it sees something async (like setTimeout, fetch), it:

// Sends it to Web APIs to wait.

// Once it's done, the callback goes into the Queue.

// The Event Loop checks:

// "Is the call stack empty?"
// If yes → it pushes the callback into the stack to run.

//? what is diff between promise and async/await function?

//? what is purpose of reduce method in array?

// const arr = [1,2,3,4,5]

// const sum = arr.reduce((accu, curr) =>{
//         return accu + curr
// },10)

// console.log(sum);

//? what is concept of curring in javascript?

// Currying is a technique where a function doesn’t take all arguments at once.
// Instead, it takes them one by one, returning a new function each time.

// function double(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// const double2 = double(2)

// console.log(double2(3));
// console.log(double2(5));

//? what is a generator function, and how is it used?

// A generator function is a special type of function that can pause execution and resume later.

// You define it using function* (with an asterisk *) and use yield to pause the function.

// 🧠 Why use it?
// To control the flow of function execution

// Create iterators manually

// Work with infinite sequences, async flows, etc.

//? what is weak maps and weak sets in javascript

// A WeakMap is a collection of key-value pairs where the keys are required to be objects

// A collection of unique object references that only stores objects and does not allow any primitives

// Both WeakMap and WeakSet are non-iterable. have no size property. and are ideal for temporary data
// storage and memory-efficient management of objects.

// let weakMap = new WeakMap();

// let obj = {}

// weakMap.set(obj, "employee")

// // obj = null;
// console.log(weakMap.get(obj));

//? how does javascript handle memory management?

// "JavaScript handles memory automatically using garbage collection. It allocates memory when we create variables and cleans it up when they are no longer reachable. This is done using algorithms like mark-and-sweep, ensuring efficient memory usage without manual control."

//? Describe the difference between shallow copy and deep copy?

// - A shallow copy copies only the first level of an object. If the object has other objects inside it (nested), those are still linked to the original.

// A deep copy copies everything, including nested objects, so the copy is completely separate from the original.

// const original = {name: "aman",  address: {city: "paris"}};

// let shallow = {...original}
// const shallow = Object.assign({}, original)

// shallow.address.city = "dubai"

// console.log(original);

// let deep = JSON.parse(JSON.stringify(original))
// deep.address.city = "tokyo"

// console.log(original.address.city);

//? what is javscript strict mode?

//? Explain the Observer pattern and how it relates to JavaScript?

// The Observer Pattern is a design pattern in which an object (called the subject) maintains a list of its dependents
// (called observers) and notifies them of any changes. typically through a broadcast mechanism

//! ***** Interview Question *******

//? Implement a function to reverse a string.

// const reverseString = (str) =>{
//   return str.split('').reverse().join('')
// }

// console.log(reverseString("hello"));

//? Write a function to check if a string is a palindrome.

// function checkPalidrom (str){
// const reversed = str.split('').reverse().join('')

//   if(str === reversed){
//         return "Is Paridrom"
//   }else{
//         return "Not a palidrom"
//   }
// }

// checkPalidrom("radhe")

//? Write a function that returns the factorial of a number.

// const factorial = (n) => {
//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// };

// const result = factorial(5);
// console.log(result);

//? Write a function to find the largest number in an array.

// function largestNumber(arr) {
//   let largest = arr[0];

//   for(let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }



// const findLargest = (arr) =>{
//   return Math.max(...arr)
// }

// const number = [2,78,26,455,2,5,9,102]
// console.log(findLargest(number));


//? Implement a function to remove duplicates from an array.

// function removeDuplicate (arr){
//    const unique = []

//    for(let i =0; i<arr.length; i++){
//          if(!unique.includes(arr[i])){
//                 unique.push(arr[i])
//          }
//    }

//    return unique

// }


// const result = removeDuplicate([1, 2, 2, 3, 4, 4, 5]);
// console.log(result); 

//! 2. **** Functions & Scope ******

//? What is the difference between a function declaration and function expression?

// 


