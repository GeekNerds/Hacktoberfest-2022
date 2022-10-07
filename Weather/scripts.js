const openWeatherMapKey = '0849853783e588e41b889eb4be68b2ed';
const form = document.getElementById('form');
const input = document.querySelector('input#city');
const loader = document.querySelector('div#loader');

const weatherContainer = document.querySelector('div#weather');
const weatherDescription = document.querySelector('div.temp h4');
const weatherIcon = document.querySelector('div.weather-icon');
const divider = document.querySelector('div#divider');

const cityName = document.querySelector('div.description h3');
const weatherToday = document.querySelector('span[name=today]');
const weatherTemp = document.querySelector('span#temp');

async function getCityLocation(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=imperial&APPID=${openWeatherMapKey}`)
    const data = await response.json();

    return data;
  } catch (error) {
    alert('Erro, check your state name or your internet');
    console.log(error)
  }
}

async function getWeather(city) {
  try {
    const userLocation = await getCityLocation(city);

    if (userLocation?.list.length > 0) {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${userLocation?.list[0]?.coord.lat}&lon=${userLocation?.list[0]?.coord.lon}&units=imperial&APPID=${openWeatherMapKey}`)
      const data = await response.json();

      return data;
    }
  } catch (error) {
    alert('Erro, check your state name or your internet');
    console.log(error)
  }
}

function getWeekDay() {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  return weekday[today.getDay()];
}

async function showWeather(weather) {
  weatherContainer.classList.add('weather');
  weatherIcon.innerHTML = `<img src="./icons/${weather.weather[0].icon}.png">`;
  cityName.innerHTML = `${weather.name}, ${weather.sys.country}`;
  weatherDescription.innerHTML = weather.weather[0].description;
  weatherTemp.innerHTML = weather.weather[0].description;
  weatherToday.innerHTML = getWeekDay();
  divider.classList.add('divider');

  let tempInCelsius = ((5 / 9) * (weather.main.temp - 32)).toFixed(1);
  weatherTemp.innerHTML = `${tempInCelsius}°`; 
}

async function removeWeather() {
  weatherContainer.classList.remove('weather');
  weatherIcon.innerHTML = '';
  cityName.innerHTML = '';
  weatherDescription.innerHTML = '';
  weatherTemp.innerHTML = '';
  weatherToday.innerHTML = '';
  weatherTemp.innerHTML = '';
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = input.value;

  if (city.length > 0) {
    loader.classList.add('loader');
    
    removeWeather();

    const weather = await getWeather(city);
    if (weather.hasOwnProperty('id'))
      showWeather(weather);
  }

  loader.classList.remove('loader');
});
