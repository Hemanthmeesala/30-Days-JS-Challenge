// Task-3 

//use the push method to add a new number to the end of the array and log the updated array

const arr = [1, 2, 3, 4, 5];

const pushElement = (element) => {
  arr.push(element);
  console.log(`The element to be pushed into array is ${element}`);
  return arr;
};
console.log(`The updated array is`, pushElement(7));

// Task-4 

//use the pop method to remove the last element from the array and log the updated array

const popElement = () => {
  arr.pop();
  return arr;
};
console.log(`The updated array is`, popElement());

// Task-5 

//use the shift method to remove the first element from the array and log the updated array

const shiftElement = () => {
  arr.shift();
  return arr;
};
console.log(`The updated array is`, shiftElement());

// Task-6 

// use the unshift method to add a new number to the beginning of the array and log the updated array

const unshiftElement = (element) => {
  arr.unshift(element);
  console.log(`The element to be unshifted is ${element}`);
  return arr;
};
console.log("The update array is ", unshiftElement(9));