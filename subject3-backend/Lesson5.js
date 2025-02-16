/*
// Date: 13 Feb, 2025
// Lesson 4: Functions and Loops


Objectives: Learning JavaScript as a Language
1. Recap of functions - work on 
2. Build a calculator app
3. Loops

*/

//Declaration
function myName(firstName, secondName) {
    const fullName = firstName + secondName;
    console.log(fullName);

}

myName("John", "Mayor");

//BMI app
// bmiApp(100, 10232);
function bmiApp(height, weight){
    //height - cm
    //weight - grams

    //unit conversion
    height = height / 100;
    weight = weight / 1000;
    let bmi = weight / (height **2);
    //check whether is overweight, normal or underweight
    if (bmi < 18.5){
        return `You are underweight and your bmi is ${bmi}`
    } else if ( bmi < 24.9) {
        return `You are normal and your bmi is ${bmi}`
    } else {
        return `You are overweight and your bmi is ${bmi}`
    }
}

//invoke or call  the function
console.log(bmiApp(170, 80000));

//calculator app
function calculatorApp(num1, num2, operator){

    //check what is the operator?
    if (operator === '+'){
        return `Your added value is ${num1 + num2}`
    } else if (operator === "-"){
        return `Your substracted value is ${num1 - num2}`
    } else if (operator === "*") {
        return `Your product is ${num1 * num2}`
    } else if (operator === '/'){
        if (num2 === 0){
            return 'Hey, enter a number2 that is not zero'
        } else {
            return `Your quotient is ${num1/num2}`
        }
    } else {
        return 'Invalid operator'
    }
}

console.log(calculatorApp(5, 10, "-"));


//Synchrounous execution
console.log("Hi there");
console.log("Hello world");
console.log("Welcome")


//Asynchrounous execution
console.log("Executed synchrounously")
//setTimeout is an asynchronous fucntion, it doesn't block the execution 
setTimeout(() => {
    console.log("HI there I am not going to wait for 500 milliseconds asynchronously")
}, 500)

setTimeout(() => {
    console.log("This is for 30 milliseconds")
}, 30);
console.log("HI there, this is another synchrounous execution")



//Declaring an asynchrounous function
const url = 'https://v2.jokeapi.dev/joke/Programming';
async function fetchJoke(){
    //trycatch block
    try {
        //
        const response = await fetch(url);
        // console.log(response)
        if(response.status == 200) {
            const joke = await response.json()
            console.log(joke)
        }
    } catch (error) {
        console.log(`Error fetching a joke ${error}`)
    }
}
fetchJoke()