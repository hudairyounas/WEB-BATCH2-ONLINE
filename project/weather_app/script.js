// complete weather app from scratch
let search_btn = document.querySelector(".search-btn");
let search_input = document.querySelector(".city-input");
let city_name = document.querySelector(".city-name");
let temperature = document.querySelector(".temperature");
let imgIcon = document.querySelector(".imgIcon");
let condition = document.querySelector(".condition");
let weather_max = document.querySelector(".weather-max");
let weather_min = document.querySelector(".weather-min");
let date_time = document.querySelector(".date-time");

const dateFunc = (date) => {
  let dt = date;
  const curDate = new Date(dt * 1000); // Convert seconds to milliseconds

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);

  // console.log(formatter);
  const formattedDate = formatter.format(curDate);
  return formattedDate;
};

//? UK => Saturday, 6 June 2026 at 20:20
//? US => Saturday, June 6, 2026 at 8:20 PM

const weatherData = async (city) => {
  try {
    let apikey = "7bbd0c8db80561d12fea457dba6d4829";
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    let response = await fetch(api);
    let data = await response.json();
    city_name.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    imgIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weather_min.textContent = `${Math.round(data.main.temp_min)}°C`;
    weather_max.textContent = `${Math.round(data.main.temp_max)}°C`;
    condition.textContent = data.weather[0].description;
    date_time.textContent = dateFunc(data.dt);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

search_btn.addEventListener("click", () => {
  weatherData(search_input.value);
});
