// Task-5

// numbers from 1-5 using do while 

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

// factorial 

let factorial = 1;
let number = 7;
let x = number;

do {
  factorial *= x;
  x--;
} while (x >= 1);

console.log(`${number}! = ${factorial}`);