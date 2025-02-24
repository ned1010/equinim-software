// alert('Hi, JS is working')

function handleMouseOver(event){

    console.log(event) //this selects the 
    event.innerHTML = 'Thank you for mouseover'; //adding a new content to the element during over
}

function handleMouseOut(event) {
    //mouse is no longer hovering over
    console.log(event) //
    event.innerHTML = ''
}