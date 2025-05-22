"reverse a string";
// input = "Equinim", output = 'miniuqE'
const name = "Equinim";

//first letter
console.log(name[0]);
//last letter
console.log(name[6]);

//reverse string
console.log(name[6] + name[5] + name[4] + name[3] + name[2] + name[1] + name[0]);

console.log("for Loop iteration");
//for loop
//initialisation , condition, increment or decrement
let output = "";
for (let i = name.length - 1; i >= 0; i = i - 1) {
	// console.log(name[i]);
	output = output + name[i];
}
console.log(output);

//While loop

let i = name.length - 1; //length of the variable
let reversedOutput = "";
while (i >= 0) {
	reversedOutput = reversedOutput + name[i];
	i = i - 1; //decrement
}
console.log(reversedOutput);
