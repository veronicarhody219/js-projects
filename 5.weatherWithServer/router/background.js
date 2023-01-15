const express = require("express");
const router = express.Router({mergeParams: true});
const axios = require("axios");

router.get("/:searchText", async (req, res) => {
  const searchText = req.params.searchText;
  const data = await fetchBackground(searchText);
  res.json(data);
});
router.get("/", async (req, res) => {
  const data = await fetchBackgroundBackup();
  res.json(data);
});

const fetchBackground = async (searchText) => {
  let urlMain = `https://pixabay.com/api/?key=${
    process.env.PIXABAY_API_KEY
  }&q=${encodeURIComponent(searchText)}`;
 
  try {
    const resBackground = await axios.get(urlMain);
    const dataBackground = resBackground.data.hits;
    return dataBackground;
  } catch (error) {
    return {error: error.stack};
  }
};

const fetchBackgroundBackup = async () => {
  let url = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}`;
  try {
    const resBackgroundBackup = await axios.get(url);
    const dataBackgroundBackup = resBackgroundBackup.data.hits;
    console.log(dataBackgroundBackup);
    return dataBackgroundBackup;
  } catch (error) {
    return {error: error.stack};
  }
};

module.exports = router;
