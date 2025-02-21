/*
Date: 17 Feb, 2025
Lesson 7


Objectives: 
1. Recap of everything we learned
    a. variable 
    b. data types (number, string, string method)
    c. Conditional statemetns
    d. functions
    e. async functions

2. Loops - 
    a. for loop
    b. while loop
3. Arrays (data types)
    a. Arrays methods
*/

//Recap
//keywords - let and const
//let - allows reassignment
let pet = 'cat';
console.log(pet);
pet = 'dog'; //reassignment
console.log(pet);

const name = "Jason";
//name = 'Ryan';//error is in line 30 
console.log(name)

//string methods and string literials
let myName = "Steph Curry";
const firstLetter = myName[0]; //this allows to access only one character 
console.log(firstLetter);

const lastName = myName.slice(6, 11);
console.log(lastName);

//string interpolation or literals
let animal  = 'takin';
console.log(`Hey you have chosen ${animal} as your animal`);

//Conditoinal statements 
/*
if (condition){

} else if(alternative condition) {
 
} else {
 
}
*/
let myChosenNumber = 5;

if (myChosenNumber > 0){
    console.log(`Youru number ${myChosenNumber} is positive`)
} else if (myChosenNumber < 0){
    console.log(`Your number ${myChosenNumber} is a negative number`)
} else {
    console.log(`Your chosen number is zero`)
};

//Functions - 
//task of function -> check if teh number is even or not
function isEven(num1){
    //if-else statement 
    if (num1 % 2 !== 1) {
        console.log(`Your number ${num1} is even`)
    } else{
        console.log(`Your number ${num1} is odd`)
    }
}
isEven(102932398283);


//Asynchrnous function - non-blocking function
const URL = 'https://dog.ceo/api/breeds/image/random'; //
async function getDogImage(){
    //trycatch 
    try {
        const response = await fetch(URL);
        // console.log(response);
        if (response.ok){
            const data = await response.json();
            console.log(data)
        }
        
    } catch (error) {
        console.log(`Error occured: ${error}`)
    }
}

getDogImage();

//Loops - a block of code that executes as long as the condition is true
/*
for (initialisaion; condition; increment){
    //console.log all the values
}

*/
for (let i = 0; i <= 10; i = i + 1){
    console.log(i)
}

for (let x = 100; x >= 0; x--){
    console.log(x)
};


/*
initialisation
while (condition){
    console.log(i)
    //increment/decrement
}
*/
let i = 0; //initialisation
console.log('======= While Loop ======')
while (i <= 20){
    console.log(i);
    i = i + 1; //i++
};

//Infinite loops - 
// while (true) {
//     console.log("HI there ")
// }


console.log('While loop from 100 to 0')
let y = 100;
while (y >=0){
    console.log(y)
    //terminating condition
    y = y - 1;
}


//Arrays - list of items enclosed by square bracket
const fruits = ['apple', 'orange', 'cherry', 'pear', 'grape'] //

//accessing fruit from fruits arra
console.log(fruits[2])
console.log(fruits[4])

//printing all the items
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])

//for loop
console.log('printing using for loop')
for (let i=0; i <= 4; i = i + 1 ){
    console.log(fruits[i])
};

//array methods