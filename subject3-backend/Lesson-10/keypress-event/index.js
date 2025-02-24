// alert("Hi there")
//Adding event in javaScript

function handleKeyPress(event) {
    console.log(event.key)
}

//select the element you wan tto add event listener
let inputElement = document.getElementById('keypress-input')
inputElement.addEventListener('keypress', handleKeyPress)