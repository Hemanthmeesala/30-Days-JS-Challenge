// Task-3

// Max of 2 numbers

const maxOfNumbers = function (num1, num2) {
    if (num1 > num2) {
      console.log(`${num1} is greater than ${num2}`);
      return;
    }
    console.log(`${num2} is greater than ${num1}`);
  };
  
  maxOfNumbers(39, 63);

//   Task-4 

// Concatenate of 2 strings

const concatinationOfString = function (str1, str2) {
    return str1 + str2;
  };
  const ans = concatinationOfString("Hemanth ", "Kumar");
  console.log(ans);