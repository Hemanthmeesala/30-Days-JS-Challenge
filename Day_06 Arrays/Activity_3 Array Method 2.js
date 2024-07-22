// Task-7 

//use the map method to create a new array where each number is doubled and log the new array

const arr = [1, 2, 3, 4, 5];

const mappedArray = arr.map((element) => {
  return element * 2;
});
console.log("The array after using map is ", mappedArray);

// Task-8 

//use the filter method to create a new array with only even numbers and log the new array

const filteredArray = arr.filter((element) => {
  return element % 2 == 0;
});
console.log("The array after using filter is ", filteredArray);

// Task-9 

//use the reduce method to calculate the sum of all numbers in the array and log the result

const reducedArray = arr.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log("Sum is " + reducedArray)
