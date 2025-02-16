//Lesson 3
//Date: 07/02/2025

//Global scope 
let country = 'Australia';
{
    //reassining the country variable
    country = "England";
    console.log('Inside block:', country);
}
console.log('Outside block:', country);

//Local or block scope
{
    let fruit = 'Apple';
    //reassining the country variable
    fruit = "Orange";
    console.log('Inside block:', fruit);
}
//console.log('Outside block:', fruit); //localscope is not accessible outside

//DATA TYPES
//1. Number
let age = 25;
//typeof tells the data type of the variable
console.log(typeof age);

let weight = 65.5;
console.log(typeof weight)

//2. String - sequence of characters
let weather = 'sunny';
console.log(typeof weather)

//Slicing 
let collegeName = 'Equinim College'
const firstLetter = collegeName[0];
console.log(firstLetter);
console.log(collegeName[8]);
// console.log(collegeName[])


//Using a function 'slice' to slice multiple characters
//slicing character 1 to 5
console.log(collegeName.slice(0,5)) //Equin
console.log(collegeName.slice(12, 15))//ege

//string concatenation (joining strings)
let firstName = 'John';
let secondName = 'Doe';
const fullName = firstName + ' ' + secondName
console.log(fullName)
console.log(firstName + " " + secondName)

//string literals - refer the variable inside the string
let myAge =50;
console.log(`I am ${myAge} years old`)

let num1 = 10;
let num2 = 30;
console.log(`${num1} + ${num2} is equal to ${num1+num2}`)

//3. Boolean - true or false
//comparison operators
/*
> greater than 
< lesser than
>= greater than or equal to
<= lesser than or equal to
== equal to 

!= not equal to 
!== not equal to and not equal data types
*/
let number1 = 35;
let number2 = 25;
let number3 = '25'

console.log(number1 < number2) //false
console.log(number1 > number2)//true
console.log(number2 == number3) // true because it checks just the face value
console.log((number2 === number3)) //false because it checks the value and the data type 

console.log(5 != '5') // checking not equal value, since 5==5, it will false 
console.log(5 !== '5') //returns true because data types are different 