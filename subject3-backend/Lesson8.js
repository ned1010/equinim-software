/*
Date: 20 Feb, 2025
Lesson 8


Objectives: 
1. Recap of arrays and loops
2. JSON and JavaScript Objects
3. DOM
3. Connecting HTML, CSS and JavaScript
*/

//Arrays or list
let colors = ['red', 'blue', 'green', 'pink', 'white', 'black', "yellow",'teal', "gray"]
console.log(colors[2])

//array methods
colors.push('purple') //purple is added to the list
console.log(colors)

//remove an item 
colors.pop(); //purple has been removed from the list
console.log(colors)

//length of the array
console.log(colors.length)

//use for loop and a while loop to pring each color in the colors list
for(let i=0; i < colors.length; i = i + 1) {
    console.log(colors[i])
}

//initialisation
let j = 0;
while (j < colors.length){
    console.log(colors[j])
    j = j + 1
};

//
let k = colors.length -1; //
while(k>=0){
    console.log(colors[k])
    k=k-1;
};

//Class 
class Car {
    //constructor 
    //assign all the properties in the constructor
    constructor(make, model, color, price, year){
        this.make = make;
        this.model = model;
        this.color = color;
        this.price = price;
        this.year = year
    };
    horn(){
        console.log("Beeeeep ")
    }
}

//Instantiate 
car1 = new Car("Toyota", "Corolla", "White", 25000, 2020) //
car1.horn()
car2 = new Car("Holden", 'Statesmnet', 'red', 80000, 1975)//
console.log(car2.make)


//JavaScript Object
const person = {
    name: 'Lionel',
    age: 25,
    occupation: 'Musician',
    songs: {
        1: ['Get out my car', 'Let it be']
    }
};

console.log(person.songs);

const secondPerson = {
    'name': 'John',
    'age': 25,
    'occupation': 'musician'
}
console.log(secondPerson.name) //dot method
console.log(secondPerson['name']) //square bracket method


let myFavouriteColors = ['red', 'blue', 'green', 'pink']
console.log(myFavouriteColors[myFavouriteColors.length])