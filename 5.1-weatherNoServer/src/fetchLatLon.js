import renderData from "./renderCurrentWeather.js";
import renderForecast from "./renderForecastWeather.js";
import fetchBackground from "./background.js";

const API_KEY = "7db4b276ae57df67954d1fa913759050";
const msg = document.querySelector(".msg");
export default async function fetchDataLatLon() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      const res = await fetch(url);
      const data = await res.json();
      const resForecast = await fetch(urlForecast);
      const dataForecast = await resForecast.json();
      console.log("data fetched", data);
      console.log("forecast fetched:", dataForecast);
      msg.textContent = data ? "weather for current location" : "";
      renderData(data);
      renderForecast(dataForecast.list);
      fetchBackground(data.name);
    });
  }
}
