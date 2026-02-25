//Problem: find area of a triangle using Heron's formula
//Solution: use the formula A = sqrt(s(s-a)(s-b)(s-c)) where s = (a+b+c)/2

let a = 5;
let b = 6;
let c = 7;

let s = (a + b + c) / 2;

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
console.log("area of triangle", area);
