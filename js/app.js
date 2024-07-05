const apiKey = 'd88a85564ac20c34a97a41e55502fb4c'; //Ключ
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='; //Ссылка
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        document.querySelector('.error').classList.remove('none');
        document.querySelector('.weather').classList.add('none')
    } else {
        let data = await response.json();

        document.querySelector('.city').innerText = data.name;
        document.querySelector('.temp').innerText = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerText = data.main.humidity + '%';
        document.querySelector('.wind').innerText = Math.round(data.wind.speed) + ' km/h';

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = './img/weather/clouds.svg';
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = './img/weather/clear.svg';
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = './img/weather/rain.svg';
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = './img/weather/drizzle.svg';
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = './img/weather/mist.svg';
        }
        document.querySelector('.weather').classList.remove('none');
        document.querySelector('.error').classList.add('none');
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})