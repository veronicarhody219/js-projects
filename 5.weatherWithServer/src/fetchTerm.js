import renderData from "./renderCurrentWeather.js";
import renderForecast from "./renderForecastWeather.js";
import fetchBackground from "./background.js";


const msg = document.querySelector(".msg");
export default async function fetchData(searchTerm) {
  let url = `http://localhost:8888/weather/${encodeURIComponent(searchTerm)}`;
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();

  try {
    console.log("data fetched", data);

    renderData(data.dataWeather);
    renderForecast(data.dataForecast);
    fetchBackground(data.dataWeather.name);

    msg.textContent = `weather for ${searchTerm}`;
  } catch (error) {
    console.log(data.message);
    msg.textContent = data.message;
  }
}
