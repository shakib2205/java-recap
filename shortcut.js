// 'almas ', 5, true, {}, []
// '', 0, false, null, undefined

//check truthy
let myVar = 5;
if(myVar){
    myVar= myVar * 100;
}
else{
    myVar = 0;
}

let myMoney = 20;
// check negative or falsy anything
if (!myMoney){

}

const money = 50;
let food;
if (money > 100){
    food = 'briyani';

}
else {
    food =' i will eat tea'
}

// ternary
let food1 = money > 100 ? 'briyani' : 'cha biscuit';
console.log(food1);

//string to number 
const input = '560';
const inputNum = +input;
console.log(inputNum);

// 
let isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
//use && if the left side is true then right side will be executed 
isActive && showUser(); //if the condition is true then it will give output


// use || if the left side is false then right side will be executed

isActive || hideUser() // true || false any kind of output it will gave back to you

// do toggle boolean
isActive = !isActive

