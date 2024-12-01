const apiKey = "e49a52b5116f883eeff7f7d5f92c3ea0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humid = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".searchBox");
const btn = document.querySelector(".btn");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");



async function checkWeather(cityName) {
    const response = await fetch(apiUrl + `&q=${cityName}` + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        weather.style.display = "none";

    } else {
        let data = await response.json();

        console.log(data);

        city.innerHTML = data.name;
        temp.innerHTML = `${Math.round(data.main.temp)}°c`;
        humid.innerHTML = `${data.main.humidity} %`;
        wind.innerHTML = `${data.wind.speed} km/h`;

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (ata.weather[0].main == "Snow") {
            weatherIcon.src = "./images/snow.png";
        }

        weather.style.display = "block";
        document.querySelector(".error").style.display = "none";
    }



}

btn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
