//1. how to declare variable using let and const
const fatherName = 'Lutfor Rahman';// not change
let season = 'winter';
season = 'summer'; // for using let it could be change

//2.6 basic condition  >,<, ===, !==, <=, >= 
// multiple condition  &&, ||

// 3.array declare
// index,
// length,push
const number = [ 34,567,78];
number [0] = 56;

// 4.loop
for (i = 0; i < number.length; i++){
    const result = number[i];
    console.log(result);
}

// 5.function
function multiply (num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiply(45,52);

// 6.object 
//3 way to access property by name
const student ={
    name:'shakib',
    age: 25,
    movies: ['john wick']   
}

const myVariable = 'age';

console.log(student.name);// direct via property 
console.log(student['age']);//access via property name string
console.log(student[myVariable]); //access via property name in a variable