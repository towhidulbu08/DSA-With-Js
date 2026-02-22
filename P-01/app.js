// Value Swaping , three methods:

//01:Using Extra Variable:

let a = 10;
let b = 20;
let c;
// c = a; // c=10, a=10
// a = b; //a=20,b=20
// b = c; //b=10

// console.log("a", a);
// console.log("b", b);

//02:

// a = a + b; //a=30
// b = a - b; //b=10
// a = a - b; //a=10

//03:destructuring assignment:

[a, b] = [b, a];

// console.log("a", a);
// console.log("b", b);

let x = 7;
let y = 2;
console.log(x / y);
console.log(x % y);
