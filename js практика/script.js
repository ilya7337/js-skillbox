async function getCurWeatherByCity(city) {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=86b2027c950749dbbe794847240311&q=${city}&aqi=no`);
    const curWeather = await data.json();
    return curWeather;
}

const searchBtn = document.querySelector('.location-button');
const cityInput = document.querySelector('.location-input');

searchBtn.addEventListener('click', async () => {
    resetWeatherApp()
    const cityValue = cityInput.value;
    const currentWeather = await getCurWeatherByCity(cityValue);
    const forecast = await getForcastByCity(cityValue);
    const icon = 'http:' + currentWeather.current.condition.icon;
    const temperature = currentWeather.current.temp_c;
    const status = currentWeather.current.condition.text;
    renderCurWeather(icon, temperature, status);
    renderForecast(forecast.forecast.forecastday[0].hour, forecast.current.last_updated);
    renderLocation(forecast.location);
})

function renderCurWeather(iconSrc, temperature, status) {
    const curWeatherIconEl = document.createElement('img');
    curWeatherIconEl.setAttribute('class', 'current-weather-icon');
    curWeatherIconEl.setAttribute('src', iconSrc);

    const curWeatherTempEl = document.createElement('p');
    curWeatherTempEl.setAttribute('class', 'current-weather-temperature');
    curWeatherTempEl.innerHTML = temperature;

    const curWeatherStatusEl = document.createElement('p');
    curWeatherStatusEl.setAttribute('class', 'current-weather-status');
    curWeatherStatusEl.innerHTML = status;

    const curWeather = document.querySelector('.current-weather');
    curWeather.appendChild(curWeatherIconEl)
    curWeather.appendChild(curWeatherTempEl)
    curWeather.appendChild(curWeatherStatusEl)
}

async function getForcastByCity(city) {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=86b2027c950749dbbe794847240311&q=${city}&days=1&aqi=no&alerts=no`);
    const forecast = await data.json();
    console.log(forecast);
    return forecast;
}


function createForecastElement(iconSrc, time, temperature) {
    const forecastEl = document.createElement('div');
    forecastEl.setAttribute('class', 'forecast-element')

    const forecastTimeEl = document.createElement('p')
    forecastTimeEl.setAttribute('class', 'forecast-time')
    forecastTimeEl.innerHTML = time.slice(11)
    

    const forecastIconEl = document.createElement('img')
    forecastIconEl.setAttribute('class', 'forecast-icon')
    forecastIconEl.setAttribute('src', iconSrc)

    const forecastTempEl = document.createElement('p')
    forecastTempEl.setAttribute('class', 'forecast-temperature')
    forecastTempEl.innerHTML = temperature

    forecastEl.appendChild(forecastTimeEl)
    forecastEl.appendChild(forecastIconEl)
    forecastEl.appendChild(forecastTempEl)
    return forecastEl
}

function renderForecast(forecast, curTime) {
    const forecastElems = document.querySelector('.forecast');
    forecast.forEach(forecastItem => {
        if (forecastItem.time >= curTime) {
            const forecastElement = createForecastElement(`http:${forecastItem.condition.icon}`, forecastItem.time, forecastItem.temp_c)
            forecastElems.appendChild(forecastElement);
        }
    });
}

function resetWeatherApp() {
    const forecastElems = document.querySelector('.forecast');
    const curWeather = document.querySelector('.current-weather');
    forecastElems.innerHTML = ''
    curWeather.innerHTML = ''
}

function renderLocation(location) {
    const locationEl = document.querySelector('.cur-location');
    locationEl.innerHTML = '';
    locationEl.innerHTML = `${location.name}, ${location.country}`;
}

