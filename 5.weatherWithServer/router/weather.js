const express = require("express");
const router = express.Router({mergeParams: true});
const axios = require("axios");

router.get("/", (req, res) => {
  res.json("Hello weather app");
});

router.get("/:searchText", async (req, res) => {
  const searchText = req.params.searchText;
  const data = await fetchWeather(searchText);
  res.json(data);
});



const fetchWeather = async (searchText) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    searchText
  )}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
    searchText
  )}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
  try {
    const resWeather = await axios.get(url);
    console.log(resWeather);
    const dataWeather = resWeather.data;
    const resForecast = await axios.get(urlForecast);
    const dataForecast = resForecast.data.list;
    const data = {dataWeather, dataForecast};
    console.log(data);
    return data;
  } catch (error) {
    return {error: error.stack};
  }
};

module.exports = router;
