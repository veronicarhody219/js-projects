const cards = document.querySelector(".cards");
const form = document.querySelector(".search");
let data;
async function fetchData(search) {
  let url = "https://api.adviceslip.com/advice";
  if (search) {
    url =
      "https://api.adviceslip.com/advice/search/" +
      encodeURIComponent(`${search}`);
  }
  console.log(url);
  const res = await fetch(url);
  data = await res.json();
  console.log(data);
}
fetchData();
async function renderRandom() {
  let url = "https://api.adviceslip.com/advice";

  const res = await fetch(url);
  data = await res.json();
  data = data.slip.advice;

  let template = "";
  try {
    template += `
    <div class="card">
        <div class="info">
            <p><span>&#8220;</span>${data} <span>&#8221;</span></p>
            <h4>-Random Advice</h4>
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
      "https://api.adviceslip.com/advice/search/" +
      encodeURIComponent(`${term}`);
  }
  console.log(url);
  const res = await fetch(url);
  data = await res.json();

  console.log(data);

  let template = "";
  data.slips.map((item) => {
    template += `
    <div class="card">
        <div class="info">
            <p><span>&#8220;</span>${item.advice} <span>&#8221;</span></p>
            <h4>-Random Advice</h4>
        </div>
    </div>
    `;
  });
  cards.innerHTML = template;
});
