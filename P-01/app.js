//unary operator:

// let a = 10;
// let b = a++; //postfix increment operator
// console.log(a); //11
// console.log(b); //10

// let c = 20;
// let d = ++c; //prefix increment operator
// console.log(c);
// console.log(d); //21

//Questions:

// let i = 11;
// i = i++ + ++i; //24
// console.log("i", i);

// let a = 11,
//   b = 22;

// let c = a + b + a++ + b++ + ++a + ++b; // 11+22+11+22+13+24

// console.log("a=" + a);
// console.log("b=" + b);
// console.log("c=" + c);

// let a = true;

// a++;

// console.log("a", a);

//let a=11++;
//console.log("a", a); // give error

//Math Functions:

console.log(Math.round(2.4)); //3

console.log(Math.ceil(10.01)); //11

console.log(Math.floor(10.9)); //10

console.log(Math.trunc(10.8998));

console.log(Math.pow(3, 3));

console.log(Math.sqrt(4));
console.log(Math.cbrt(8));

console.log(Math.trunc(Math.random() * 9000) + 1000);

console.log((20.3293).toFixed(1));
