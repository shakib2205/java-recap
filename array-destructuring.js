//1. array destructuring
const numbers = [45, 68];
// const x = numbers[0];
// const y = numbers[1];

// console.log(x, y);

const [x, y] = numbers;


function boxify (num1, num2){
    const nums = [num1, num2];
    return nums;
}

console.log(boxify(90,34));