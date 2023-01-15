const forecast = document.querySelector(".forecast");
export default async function renderForecast(data) {
  let template = "";
  data.map((item) => {
    if (item.dt_txt.includes("06:00:00")) {
      console.log(item);
      let weatherData = item.weather[0];

      template += `
      <div class="card">
        <h3 class="weather-title weather-title-forecast">${item.dt_txt}</h3>
        <img
          src="http://openweathermap.org/img/wn/${weatherData.icon}@2x.png"
          alt="weather icon"
        />
        <h2 class="weather-temp weather-temp-forecast">${item.main.temp.toFixed(0)}°C</h2>
        <p class="desc-forecast">${weatherData.description}</p>
      </div>`;
    }
  });
  forecast.innerHTML = template;
}
