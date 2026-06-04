// complete weather app from scratch
let search_btn = document.querySelector(".search-btn")
let search_input = document.querySelector(".city-input");
let temperature = document.querySelector(".temperature")


const weatherData = async (city) => {
    let apikey = ''
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    let response = await fetch(api);
    let data = await response.json();
    console.log(data);
}


search_btn.addEventListener("click", () =>{
    weatherData(search_input.value);
})