// complete weather app from scratch
let search_btn = document.querySelector(".search-btn")
let search_input = document.querySelector(".city-input");
let city_name = document.querySelector(".city-name");
let temperature = document.querySelector(".temperature");
let imgIcon = document.querySelector(".imgIcon");
let condition = document.querySelector(".condition");
let weather_max = document.querySelector(".weather-max")
let weather_min = document.querySelector(".weather-min")


const weatherData = async (city) => {
    let apikey = '7bbd0c8db80561d12fea457dba6d4829'
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    let response = await fetch(api);
    let data = await response.json();
    city_name.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    imgIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weather_min.textContent = `${Math.round(data.main.temp_min)}°C`;
    weather_max.textContent = `${Math.round(data.main.temp_max)}°C`;
    condition.textContent = data.weather[0].description;
    console.log(data);
}


search_btn.addEventListener("click", () =>{
    weatherData(search_input.value);
})