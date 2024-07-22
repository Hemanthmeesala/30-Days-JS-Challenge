// Task-12 

//create a two-dimensional array(matrix) and log the entire array to the console

const matrix2D = [
  [21, 22, 23, 24, 25],
  [31, 32, 33, 34, 35],
];
console.log(matrix2D);


// Task-13 

// access and log a specific element from the two-dimensional array

const accessedElementFromMatrix = (row, column) => {
  return matrix2D[row][column];
};
console.log(accessedElementFromMatrix(1, 3));