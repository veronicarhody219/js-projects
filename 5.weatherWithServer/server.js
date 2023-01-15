const weather = require("./router/weather");
const weatherLatlon = require("./router/weatherLatlon");
const background = require("./router/background");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json("Made with love");
});
app.use("/weather", weather);
app.use("/latlon", weatherLatlon);
app.use("/background", background);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
