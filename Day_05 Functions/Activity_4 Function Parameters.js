// Task-7

// Product of 2 numbers 


const productOf2Numbers = (num1, num2 = 7) => {
    return num1 * num2;
  };
  
  const product = productOf2Numbers(5, 50);
  console.log(product);
  

//   Task-8 

//  greeting message

  const greetingMessage = (name, age = 18) => {
    return `Welcome ${name}, Your age is ${age}`;
  };
  
  const greet = greetingMessage("Hemanth");
  console.log(greet);