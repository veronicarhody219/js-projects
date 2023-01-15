import renderData from "./renderCurrentWeather.js";
import renderForecast from "./renderForecastWeather.js";
import fetchBackground from "./background.js";

const API_KEY = "7db4b276ae57df67954d1fa913759050";
const msg = document.querySelector(".msg");
export default async function fetchData(searchTerm) {
  let searchTermEncoded = encodeURIComponent(searchTerm);
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTermEncoded}&appid=${API_KEY}&units=metric`;
  
  const res = await fetch(url);
  const data = await res.json();

  let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTermEncoded}&appid=${API_KEY}&units=metric`;

  const resForecast = await fetch(urlForecast);
  const dataForecast = await resForecast.json();
  try {
    console.log("data fetched", data);
    console.log("forecast fetched", dataForecast);
    renderData(data);
    renderForecast(dataForecast.list);
    fetchBackground(data.name);

    msg.textContent = `weather for ${searchTerm}`;
  } catch (error) {
    console.log(data.message);
    msg.textContent = data.message;
  }
}
