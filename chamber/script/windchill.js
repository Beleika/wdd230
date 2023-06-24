// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Maryland&units=imperial&appid=325eb4a65c9611b76c462dc2a8be0928';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }


function  displayResults(weatherData) {
  currentTemp.textContent = weatherData.main.temp.toFixed(1);
  const imagesrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', imagesrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.innerHTML = desc;
}


  
apiFetch();



// GET TEMPERATURE AND WINDSPEED ELEMENTS
const temperatureC = parseFloat(document.querySelector("#temperature").textContent);
const windSpeedKmh = parseFloat(document.querySelector("#windSpeed").textContent);

// If temperature in °C is below 10 and Wind speed in Km/h is above 4.8, run the code...
if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    const temperatureF = celsiusToFahrenheit(temperatureC);
    const windSpeedMph = kmhToMph(windSpeedKmh);

    const windChill = calculateWindChill(temperatureF,windSpeedMph);
    document.querySelector("#windChill").textContent = `${fahrenheitToCelsius(windChill).toFixed(1)} °C`;
}
else {
    document.querySelector("#windChill").textContent = "N/A";
}

// -----FUNCTIONS-----
/**
 * Converts the temperature from °C to °F and returns it
 * @param {float} temperatureC Temperature in Celsius
 * @returns  {float} Temperature in Fahrenheit 
 */
function celsiusToFahrenheit(temperatureC) {
    
    return (temperatureC * 9 / 5) + 32;
}

/**
 * Converts the temperature from °F to °C and returns it
 * @param {float} temperatureF Temperature in Fahrenheit
 * @returns  {float} Temperature in Celsius 
 */
function fahrenheitToCelsius(temperatureF) {
    return (temperatureF - 32) * 5 / 9;
}

/**
 * Converts the speed from Kmh to Mph and returns it
 * @param {float} speedKmh Speed in Kmh
 * @returns Speed in Mph
 */
function kmhToMph(speedKmh) {
    return speedKmh / 1.60934;
}

/**
 * Calculates the windchill using the formula and returns it
 * @param {float} temperatureF Temperature in Fahrenheit
 * @param {float} windSpeedMph Windspeed in Mph
 * @returns Windchill in Fahrenheit
 */
function calculateWindChill(temperatureF, windSpeedMph) {
    const windChill = 35.74 + 0.6215 * temperatureF - 35.75 * Math.pow(windSpeedMph,0.16) + 0.4275 * temperatureF * Math.pow(windSpeedMph, 0.16);
    return windChill;
}
