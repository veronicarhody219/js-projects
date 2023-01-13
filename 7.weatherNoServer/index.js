import fetchData from "./src/fetchTerm.js";
import fetchDataLatLon from "./src/fetchLatLon.js";
import fetchBackground from "./src/background.js";

window.addEventListener("DOMContentLoaded", App());

function App() {
  const searchForm = document.querySelector(".search-form");

  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let searchTerm = searchForm.search.value;
    await fetchData(searchTerm);
  });

  fetchDataLatLon();
}
