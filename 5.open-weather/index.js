window.addEventListener("DOMContentLoaded", () => App());

const App = () => {
  const cards = document.querySelector(".cards");
  const searchForm = document.querySelector(".searchForm");

  // renderData
  async function renderData(term) {
    await fetchData(term);
    let template = "";

    cards.innerHTML = template;
  }
  // search data
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    await renderData(searchForm.term.value.trim());
  });

  renderData();

  // fetch weather
  async function fetchData() {}
  fetchData();
};
