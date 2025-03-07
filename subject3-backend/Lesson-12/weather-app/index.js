// alert("Hi")


//using asynchronous function 
const cityName = 'Perth';
const API = '54e057550da574a2c045b1e2f0bc5ded';
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API}&units=metric`;


async function fetchWeatherData(){
    try { 
        
        const res = await fetch(URL) 
        // console.log(res)
        if (res.status === 200) {
            const weatherData = await res.json()
            // console .log(weatherData.main.temp)
            const temperature = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            // console.log(description)
            const icon = weatherData.weather[0].icon;
            const feelsLike = weatherData.main.feels_like;
            const country = weatherData.sys.country;
            console.log(temperature);
            console.log(description);
            console.log(icon);
            console.log(feelsLike);
            console.log(country);

            //select temperature element
            const temperatureElement = document.getElementById('temp');
            // console.log(temperatureElement)
            temperatureElement.innerHTML = temperature;


            const descriptionElement = document.getElementById('description');
            const iconElement = document.getElementById('icon');
            const feelsLikeElment = document.getElementById("feelsLike")
            const countryElement = document.getElementById('country');
            descriptionElement.innerHTML = description;
            iconElement.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            feelsLikeElment.innerHTML = feelsLike;
            countryElement.innerHTML = country;
        }
    } catch (error) {
        console.log(error)
    }

}
fetchWeatherData();