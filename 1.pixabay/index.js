window.addEventListener("DOMContentLoaded", () => App());

const App = () => {
  const cards = document.querySelector(".cards");
  const searchForm = document.querySelector(".searchForm");
  const listPage = document.querySelector(".list-page");
  let imageArray = [];

  let list = [];
  let thisPage = 1;
  let limit = 4;

  // renderData
  async function renderData(term) {
    await fetchData(term);
    let template = "";
    imageArray.map((item) => {
      template += `
       <div class="card">
              <img class="img" src=${item.webformatURL} alt=${item.tags} >
              <div class="info">
              <div class="user-info">
              <img class="avatar" src=${item.userImageURL} alt=${item.user}>
              <p class="user">${item.user}</p>
              </div>
              <p>Likes: ${item.likes}</p>
              <p>Downloads: ${item.downloads}</p>
              </div>
          </div>
          <div class="modal">
           <button class="closeBtn">Close</button>
           <div class="card-modal">
                <img class="img img-modal" src=${item.webformatURL} alt=${item.tags} >
                <div class="info">
                <div class="user-info">
                <img class="avatar" src=${item.userImageURL} alt=${item.user}>
                <p class="user">${item.user}</p>
                </div>
                <p>Likes: ${item.likes}</p>
                <p>Downloads: ${item.downloads}</p>
                </div>
            </div>
       </div>
     `;
    });
    cards.innerHTML = template;

    const cardEls = cards.querySelectorAll(".card");

    cardEls.forEach((itemCardEls, index) =>
      itemCardEls.addEventListener("click", () => {
        const modalEl = cards.querySelectorAll(".modal");

        modalEl[index].style.display = "block";

        const closeBtns = cards.querySelectorAll(".closeBtn");

        closeBtns[index].style.display = "none";
        window.onclick = function (event) {
          if (event.target == modalEl[index]) {
            modalEl[index].style.display = "none";
          }
        };
      })
    );

    list = cardEls;
    console.log(list);
    loadItem(list);
  }
  // search data
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    await renderData(searchForm.term.value.trim());
  });

  renderData();

  // fetchData
  async function fetchData(term) {
    const API_KEY = "22784433-7d45986b04ce67d11e9b23efc";
    let URL = "https://pixabay.com/api/?key=" + API_KEY;
    if (term) {
      URL += "&q=" + encodeURIComponent(`${term}`);
    }

    const res = await fetch(URL);
    const data = await res.json();
    imageArray = data.hits;
    console.log(imageArray);
  }

  //  pagination

  async function loadItem(list) {
    let begin = limit * (thisPage - 1);
    let end = limit * thisPage - 1;
    list.forEach((item, index) => {
      if (index >= begin && index <= end) {
        item.style.display = "grid";
      } else {
        item.style.display = "none";
      }
    });
    listPageFunc(list);
  }

  function listPageFunc(list) {
    let count = Math.ceil(list.length / limit);
    console.log(count);
    listPage.innerHTML = "";

    let start = document.createElement("li");
    start.innerText = "<<";
    start.className = "page-btn prev";
    
      start.addEventListener("click", () => {
       thisPage = 1
        loadItem(list);
      });
    listPage.appendChild(start);

    let prev = document.createElement("li");
    prev.innerText = "<";
    prev.className = "page-btn prev";
    if (thisPage !== 1) {
      prev.addEventListener("click", () => {
        thisPage--;
        loadItem(list);
      });
    } else {
      prev.setAttribute("disabled", "");
    }
    listPage.appendChild(prev);

    for (let i = 1; i <= count; i++) {
      let newPage = document.createElement("li");
      newPage.innerText = i;
      newPage.className = "page-btn";
      listPage.appendChild(newPage);
      if (i == thisPage) {
        newPage.classList.add("active");
      }
      newPage.addEventListener("click", () => {
        thisPage = i;
        loadItem(list);
      });
    }
    let next = document.createElement("li");
    next.innerText = ">";
    next.className = "page-btn next";

    listPage.appendChild(next);
    if (thisPage !== count) {
      next.addEventListener("click", () => {
        thisPage++;
        loadItem(list);
      });
    } else {
      next.setAttribute("disabled", "");
    }
    let end = document.createElement("li");
    end.innerText = ">>";
    end.className = "page-btn next";

    end.addEventListener("click", () => {
      thisPage = count;
      loadItem(list);
    });
    listPage.appendChild(end);
  }
};
