//Task 5

const firstArray = ["apple", "banana", "orange", "guava"]

const secondArray = [...firstArray, "milk", "egg"];

console.log(secondArray);

//Task 5

function sumOfNumber (...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number
    }
    return result;
}

const total = sumOfNumber(1, 3);

console.log(total);