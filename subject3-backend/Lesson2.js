//Single-line comment 
/* Multi-line comment 
VAriables: to store data
keywords: var, let, const
*/
//declaring variable
const name = "John mayer"; //

// const 1age = 25; //cannot start a variable with a number
const $age = 25; //you can start variable with dollar sign
console.log(name); 
console.log($age); 

//Naming conventions
//snake_case 
const my_name = 'John';
console.log(my_name);

//camelCase
const myName = 'Michael';
console.log(myName);

//Reassignment to const variable is not allowed
const animal = 'cat';
// animal = 'dog';
console.log(animal);


//Declaring variable using Let
let carModel = 'Ford';
console.log(carModel); //Ford
carModel = 'Mercedes';
console.log(carModel);//Mercedes


//Declaring variable using var
//var allows you to reassign a variable
var programmingLanguage = 'JavaScript';
console.log(programmingLanguage);  
//reassigning the variable
programmingLanguage = 'Python';
console.log(programmingLanguage); 



//Scope - defines where the variables are accessible
//var - has a global scope

var fruit = 'Apple';

//create a block 
{
    console.log("Before reassigning:",fruit);
    //reassigning the variable
    fruit = 'Orange';
    console.log("After reassigning:",fruit);
}

console.log('Outside block:',fruit);

//Var - inside a block
{
    let city = "Perth";
    console.log('Before reassigning:', city);
    city = "Sydney";
    console.log('After reassigning:', city);
}
console.log('Outside block city:', city);