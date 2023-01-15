import fetchData from "./fetchTerm.js";
import fetchDataLatLon from "./fetchLatLon.js";
import fetchBackground from "./background.js";
import "../styles.css";

window.addEventListener("DOMContentLoaded", App());

async function App() {
  const searchForm = document.querySelector(".search-form");
  fetchBackground();
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let searchTerm = searchForm.search.value;
    await fetchData(searchTerm);
  });

  await fetchDataLatLon();
}
