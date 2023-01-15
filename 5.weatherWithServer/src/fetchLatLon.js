import renderData from "./renderCurrentWeather.js";
import renderForecast from "./renderForecastWeather.js";
import fetchBackground from "./background.js";

const msg = document.querySelector(".msg");
export default async function fetchDataLatLon() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      let url = `http://localhost:8888/latlon/${lat},${lon}`;

      const res = await fetch(url);
      console.log(res);
      const data = await res.json();
      console.log(data);

      console.log("data fetched", data);

      msg.textContent = data ? "weather for current location" : "";
      renderData(data.dataWeather);
      renderForecast(data.dataForecast);
      fetchBackground(data.dataWeather.name);
    });
  }
}
