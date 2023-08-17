const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

searchButton.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  } else {
    weatherInfo.textContent = 'Please enter a city.';
  }
});

async function getWeather(city) {
  const apiKey = 'f4612b644642353863c1c4f7512974b0'; // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      const { name, main, weather } = data;
      const temperature = main.temp;
      const description = weather[0].description;

      weatherInfo.innerHTML = `<p>City: ${name}</p>
                                <p>Temperature: ${temperature}°C</p>
                                <p>Description: ${description}</p>`;
    } else {
      weatherInfo.textContent = 'City not found.';
    }
  } catch (error) {
    weatherInfo.textContent = 'An error occurred. Please try again later.';
  }
}

document.querySelector('.mobile-menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-mobile-links').classList.toggle('active');
  });
  