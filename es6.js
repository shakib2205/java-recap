const student ={
    name:'shakib',
    age: 25,
    movies: ['john wick']   
}
//1. template string
const about = `my name is ${student.name} age of ${student.age}has number ${numbers[2]} also liked movies ${student.movies}`;
console.log(about);

//arrow function
const getFiftyFive = () => 55;
const addSixty = (num) => num + 60;
const isEven = () => x % 2 == 0;
const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}

//spread operator
