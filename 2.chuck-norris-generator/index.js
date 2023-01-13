const cards = document.querySelector(".cards");
const form = document.querySelector(".search");
let data;
async function fetchData(search) {
  let url = "https://api.chucknorris.io/jokes/random";
  if (search) {
    url =
      "https://api.chucknorris.io/jokes/search?query=" +
      encodeURIComponent(`${search}`);
  }
  console.log(url);
  const res = await fetch(url);
  data = await res.json();
  return data;
}
async function renderRandom() {
  let url = "https://api.chucknorris.io/jokes/random";

  const res = await fetch(url);
  data = await res.json();
  let template = "";
  try {
    template += `
    <div class="card">
        <div class="info">
            <p><span>&#8220;</span>${data.value} <span>&#8221;</span></p>
            <h4>-C.N</h4>
        </div>
    </div>
    `;
    console.log("data from random:", data);
    cards.innerHTML = template;
  } catch (error) {
    console.log(error);
  }
}
renderRandom();
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let term = form.search.value;
  if (term) {
    url =
      "https://api.chucknorris.io/jokes/search?query=" +
      encodeURIComponent(`${term}`);
  }
  console.log(url);
  const res = await fetch(url);
  data = await res.json();

  console.log(data);

  let template = "";
  data.result.map((item) => {
    template += `
    <div class="card">
        <div class="info">
            <p><span>&#8220;</span>${item.value} <span>&#8221;</span></p>
            <h4>-C.N</h4>
        </div>
    </div>
    `;
  });
  cards.innerHTML = template;
});
