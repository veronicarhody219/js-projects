const cards = document.querySelector(".cards");
export default async function renderData(data) {
  let weatherData = data.weather[0];
  console.log(weatherData.icon)
  let template = "";
  template += `
      <div class="card">
        <h3 class="weather-title">${data.name}</h3>
        <img
          src="http://openweathermap.org/img/wn/${weatherData.icon}@2x.png"
          alt="weather icon"
        />
        <h2 class="weather-temp">${data.main.temp.toFixed(0)}°C</h2>
        <p class="desc">It's ${
          weatherData.description
        } today. It's currently ${data.main.temp.toFixed(
    0
  )}°C, the high will be ${data.main.temp_max.toFixed(2)}°C</p>
      </div>`;
  cards.innerHTML = template;
}
