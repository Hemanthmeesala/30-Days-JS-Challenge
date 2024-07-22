// Task-1

// Check even or odd 

function isEvenOrOdd(num) {
    if (num % 2) {
      console.log("Number is Odd");
      return;
    }
    console.log("Number is Even");
  }
  
  isEvenOrOdd(3963);

// Task-2 

// square

function squareOfNumber(num) {
    return num * num;
  }
  let num = 7;
  let result = squareOfNumber(num);
  console.log("Square of", num, "is", result);