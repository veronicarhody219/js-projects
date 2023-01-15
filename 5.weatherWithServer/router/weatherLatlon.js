const express = require("express");
const router = express.Router({mergeParams: true});
const axios = require("axios");

router.get("/:latlon", async (req, res) => {
  const latlon = req.params.latlon.split(",");
  const lat = latlon[0];
  const lon = latlon[1];
  const data = await fetchWeatherLatlon(lat, lon);
  res.json(data);
});


const fetchWeatherLatlon = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

  try {
    const resWeather = await axios.get(url);
    console.log(resWeather);
    const dataWeather = resWeather.data;
    const resForecast = await axios.get(urlForecast);
    console.log(urlForecast);
    const dataForecast = resForecast.data.list;
    const data = {dataWeather, dataForecast};
    return data;
  } catch (error) {
    return {error: error.stack};
  }
};
module.exports = router;
