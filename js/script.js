"use strict";
console.log("Hello World!!!");
const obj = { // obj 
    Name: "John",
    Age: 21,
    Student: true
};
console.log(obj.Age);
/*
let fruits = ["Яблоко", "Апельсин", "Слива", "Банан"]; // array
fruits[4] = 'Лимон'; // add element
console.log(fruits.length-1); // lenght
console.log(fruits[4]);
let fruits1 = ["Apple", "Orange", "Plum"];
console.log(fruits1[fruits1.length-1]); // Plum, print last element
console.log(fruits1.at(-1)); // again Plum
fruits1.pop(); // delate last element 
fruits1.push("Pear"); // create in last element
fruits1.shift(); // delate first element
fruits1.unshift("PineApple"); // create first element
*/

let x = 4;
if (5 == x) {
    console.log("Okay, it's right!");
} else if (x >= 4) {
    console.log("Maybe");
} else {
    console.log("No, it's not right!");
} 
