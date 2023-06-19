"use strict";
// data types
/*

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
// if and others*
/*

let x = 4;
if (5 == x) {
    console.log("Okay, it's right!");
} else if (x >= 4) {
    console.log("Maybe");
} else {
    console.log("No, it's not right!");
} 
(x == 50) ? console.log("Okay, it's right!") : console.log("No, it's not right!");


const num = '100';
const num_1 = 0;
switch (num) {
    case '100':
        console.log("Yes");
        break;
    case 50:
        console.log("Maybe");
        break;
    case 5:
        console.log("No");
        break;
    default:
        console.log("Never!!!");
        break;
}
*/
// some task
/*

console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!');
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!');
}
*/
// while and other
/*
let x = -1;

while (x < 55) {
    console.log("it's Right!");
    x++;
}

do {
    console.log("it's Right!");
    x++;
}
while (x < 55);
*/
for (let i = 0; i < 10; i++) {
    if (i == 0) {
        console.log(i);
    } else {
        console.log("What?");
    }
}