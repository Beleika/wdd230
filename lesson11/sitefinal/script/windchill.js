
const apiKey = '325eb4a65c9611b76c462dc2a8be0928';
// Make a request for the current weather
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=325eb4a65c9611b76c462dc2a8be0928&units=metric`)

  .then(response => response.json())
  .then(data => {
    const currentTemp = data.main.temp;
    const condition = data.weather[0].description;
    const humidity = data.main.humidity;
    document.getElementById('current-temp').textContent = currentTemp + '°C';
    document.getElementById('condition').textContent = condition;
    document.getElementById('humidity').textContent = humidity + '%';
  });

// Make a request for the three-day forecast

// Function to get the weather forecast
async function getWeatherForecast() {
  const city = 'Carlsbad'; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=metric&appid=325eb4a65c9611b76c462dc2a8be0928`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Get the weather forecast for the next three days
    const forecast = data.list.filter((item) => {
      // Extract the date from the forecast item
      const date = new Date(item.dt_txt.split(' ')[0]);
      
      // Get today's date and the next two days
      const today = new Date();
      const nextDay = new Date();
      nextDay.setDate(today.getDate() + 1);
      const twoDaysLater = new Date();
      twoDaysLater.setDate(today.getDate() + 2);
      
      // Filter the forecast items for the next three days
      return date >= today && date <= twoDaysLater;
    });

    // Display the temperature forecast for the next three days
    const forecastlist = document.getElementById('forecast-list')
    forecast.forEach((item) => {
      const date = item.dt_txt.split(' ')[0];
      const temperature = item.main.temp;
      console.log(`${date}: ${temperature}°C`);
      
      //forecastList.appendChild.length;
    });
  } catch (error) {
    console.log('Error fetching weather forecast:', error);
  }
}

// Call the function to get the weather forecast
getWeatherForecast();