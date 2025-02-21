//Lesson 4 - Operators
//1. Arithmetic operators

//addition
const add = 5+5;
console.log(add);
const sub = 10-5;
console.log(sub)
const mul = 5*5;
console.log(mul)
const div = 10/2;
console.log(div);

//Modulus
const mod = 10%3; //10/3 = 3 remainder 1, answer is 1
console.log(mod)

//Exponential 
const expon = 2**3; //2*2*2 = 8
console.log('Exponential is:', expon)


//Logical Operators
//1. AND &&
const firstLogic = 5 > 3;
const secondLogic = 5 < 10;
console.log(firstLogic && secondLogic)
console.log(5 > 3 && 5 > 10) //false 

//conditional statements (if-else statement)
let number = -10;
if (number > 0) {
    console.log("Hey, it is a positive number");
} else if (number === 0) {
    console.log("Hey, it is zero")
}else {
    console.log("Hey, it is a negative number")
}

//modulus 
let num1 = 30; 
if (num1%5 === 0 && num1%3 === 0){
    console.log('pineapple')
} else if (num1 % 5 === 0){
    console.log('orange')
} else if (num1 % 3 === 0){
    console.log("apple")
} else {
    console.log("neither")
}

//Functions - a building block of computer programs 
//inputs to the functionn is called parameters
function addNumbers(input1, input2){
    console.log(input1+input2)
}

addNumbers(5, 5)//arguments is the value you pass to the function
addNumbers(-5, 5)

function divideNumbers(x, y){
    if (y === 0){
        console.log("Enter a valid y")
    } else {
        console.log(x/y)
    }
}
divideNumbers(10, 5);
divideNumbers(10000293283823,1298382);

//Funlction with no parameters/inputs

function helloWorld(){
    console.log("hi there")
};
