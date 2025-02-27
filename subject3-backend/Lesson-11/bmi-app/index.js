function bmiApp(){
    //it selects the input that has height
    const height = document.getElementById('height').value;
    console.log(height)
    const weight = document.getElementById('weight').value;
    console.log(weight);

    const result = document.getElementById('result');

    //calculate bmi
    const bmi = weight / (height ** 2)
    //check whether is overweight, normal or underweight
    if (bmi < 18.5){
        result.innerHTML = `You are underweight and your bmi is ${bmi}`
    } else if ( bmi < 24.9) {
        result.innerHTML = `You are normal and your bmi is ${bmi}`
    } else {
        result.innerHTML = `You are overweight and your bmi is ${bmi}`
    }
}