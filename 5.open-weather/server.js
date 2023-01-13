import weather from "./weather/weather.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json({message: "hello my app"});
});

app.use("/weather", weather);
app.listen(
  process.env.PORT,
  console.log(`app is litening on port ${process.env.PORT}`)
);
