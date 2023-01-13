import express from "express";
import fetch from "node-fetch";
export default function weather() {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.json("hello weather app");
  });

  const fetchWeather = async (searchtext) => {
    let URLweather = `https://api.openweathermap.org/data/2.5/weather?q=${searchtext}&appid=${process.env.WEATHER_API_KEY}`;
    try {
      const weatherStream = await fetch(URLweather);
      const weatherJson = await weatherStream.json();
      return weatherJson;
    } catch (error) {
      return {error: error.stack};
    }
  };
  router.get("/:searchtext", async (req, res) => {
    const searchtext = req.params.searchtext;
    const data = await fetchWeather(searchtext);
    res.json(data);
    console.log(data);
  });
}
