// alert('hi there')

function handleChange(event){
    // console.log(event) //
    console.log(event.value) //prints the value in the input field

    //event.value -> fetches the value in the input
    let titleToChange = document.getElementById('title');
    // console.log(titleToChange.innerHTML)
    titleToChange.innerHTML = event.value


}