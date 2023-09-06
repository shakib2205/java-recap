//1. JSON

const student ={
    name:'shakib',
    age: 25,
    movies: ['john wick']   
}

const studentJSON = JSON.stringify(student); // converting object to json
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

//2. fetch

fetch('url')
.then(res => res.json())
.then (data => console.log(data))

//keys, values 
 const keys = Object.keys(student);
 const values = Object.values(student);

//for 

const numbers = [34,56,45];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

//

