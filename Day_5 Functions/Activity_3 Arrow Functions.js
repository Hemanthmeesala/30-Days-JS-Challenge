// Task-5

// sum of 2 numbers

const sumOfTwoNumbers = (num1, num2) => {
    return num1 + num2;
  };
  
  let num1 = 39,
    num2 = 63;
  
  const sum = sumOfTwoNumbers(num1, num2);
  console.log(`${num1} + ${num2} =`, sum);

//   Task-6 

// check char in string
  
  const isCharPresentInString = (str, char) => {
    return str.toLowerCase().includes(char.toLowerCase());
  };
  
  const res = isCharPresentInString("Hemanth", "HI");
  console.log(res);