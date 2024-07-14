//  Activity 1 

//  Task 1-5

let a = 5;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//  Activity 2

//  Task 6-7

a += 39;
b -= 63;
console.log(a);
console.log(b);

//  Activity 3

//  Task 8-10

let x = 3;
let y = 4;
let z = "3";

console.log (x < y);
console.log (x > y);
console.log (x <= y);
console.log (x >= y);
console.log (x == z);
console.log (x === z);

//  Activity 4

//  Tasl 11-13

if (x == z && x === z) {
    console.log("x and z are equal on &&");
}

if (x == z || x === z) {

    console.log("x and z are equal on || ");

}

function isPositive(number) {
    return number > 0;
  }
  function isNotPositive(number) {
    return !isPositive(number);
  }
  
  let number1 = 63;
  let number2 = -39;
  let number3 = 0;

console.log(`${number1} is positive: ${isPositive(number1)}`);
console.log(`${number2} is positive: ${isPositive(number2)}`);
console.log(`${number3} is positive: ${isPositive(number3)}`); 
console.log(`${number3} is not positive: ${isNotPositive(number3)}`);

// Activity 5

// Task 14

const isEven = (number) => number % 2 === 0;

console.log(isEven(10));
console.log(!isEven(10));
console.log(isEven(9));
console.log(!isEven(9));

// Feature Request 

// 1
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const remainder = (a, b) => a % b;

console.log("Addition: ", add(39, 63));
console.log("Subtraction: ", sub(39, 63));
console.log("Multiplication: ", multiply(39, 63));
console.log("divide: ", divide(39, 63));
console.log("remainder: ", remainder(39, 63));

// 2
const lessthan = (a,b) => a < b;
const greaterthan = (a,b) => a > b;
const lessthanequal = (a,b) => a <= b;
const greaterthanequal = (a,b) => a >= b;
const equal = (a,b) => a == b;
const strictlyequal = (a,b) => a === b;

console.log( lessthan(39, 63));
console.log( greaterthan(39, 63));
console.log( lessthanequal(39, 63));
console.log( greaterthanequal(39, 63));
console.log( equal("63", 63));
console.log( strictlyequal("63", 63));

// 3
number1 < 0 ? console.log("number1 is negative number") : console.log("number1 is positive number");

number2 < 0 ? console.log("number2 is negative number") : console.log("number2 is positive number");