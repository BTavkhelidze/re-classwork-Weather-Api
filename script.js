const searchInput = document.querySelector('.searchInput');
const searchBtn = document.querySelector('.searchBtn');

const livetime = new Date();
const options = { hour: '2-digit', minute: '2-digit' };

const livetimeString = livetime.toLocaleTimeString([], options);
const year = livetime.getFullYear().toString();
const month = livetime.getMonth();
let monthName;

const day = livetime.getDay();
let dayName;

switch (day) {
  case 0:
    dayName = 'Monday';
    break;
  case 1:
    dayName = 'Tuesday';
    break;
  case 2:
    dayName = 'Wednesday';
    break;
  case 3:
    dayName = 'Thursday';
    break;
  case 4:
    dayName = 'Friday';
    break;
  case 5:
    dayName = 'Saturday';
    break;
  case 6:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'undefined';
}

switch (month) {
  case 0:
    monthName = 'Jen';
    break;
  case 1:
    monthName = 'Feb';
    break;
  case 2:
    monthName = 'Mar';
    break;
  case 3:
    monthName = 'Apr';
    break;
  case 4:
    monthName = 'May';
    break;
  case 5:
    monthName = 'Jun';
    break;
  case 6:
    monthName = 'Jul';
    break;
  case 7:
    monthName = 'Aug';
    break;
  case 8:
    monthName = 'Sep';
    break;
  case 9:
    monthName = 'Oct';
    break;
  case 10:
    monthName = 'Nov';
    break;
  case 11:
    monthName = 'Dec';
    break;
  default:
    monthName = 'undefined';
}

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0ca44187b7d3c8d54bb842badb0b907`;
  const cityName = document.querySelector('.cityName');
  const live__time = document.querySelector('.live__time');
  live__time.textContent = ' ';

  const humadility = document.querySelector('.humadility');
  const clouds = document.querySelector('.clouds');
  const wind = document.querySelector('.wind');

  humadility.textContent = '';
  clouds.textContent = '';
  wind.textContent = '';

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    cityName.textContent = data.name;
    live__time.textContent = `${livetimeString} - ${dayName}, ${month} ${monthName} '${year.slice(
      -2
    )} `;

    humadility.textContent = `${data.main.humidity}%`;
    clouds.textContent = `${data.clouds.all}%`;
    wind.textContent = data.wind.speed;
  } catch (err) {}
}

getWeather();

searchBtn.addEventListener('click', () => {
  const city = searchInput.value;
  getWeather(city);
});
