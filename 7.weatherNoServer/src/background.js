export default async function fetchBackground(searchTerm) {
  const body = document.querySelector("#body");
  const API_KEY = "22784433-7d45986b04ce67d11e9b23efc";
  let URL = "https://pixabay.com/api/?key=" + API_KEY;
  let URLmain;
  if (searchTerm) {
    URLmain = URL + "&q=" + encodeURIComponent(`${searchTerm}`);
  }

  const res = await fetch(URLmain);
  const data = await res.json();
  let imageArray = data.hits;
  let random = Math.floor(Math.random() * 20);
  let background = imageArray[random];
  const resBackup = await fetch(URL);
  const dataBackup = await resBackup.json();
  let imageArrayBackup = dataBackup.hits;

  let backgroundBackup = imageArrayBackup[random];
  console.log(background);
  console.log(backgroundBackup);
  if (background.imageURL !== undefined) {
    body.style.background = `url(${background.imageURL})`;
  } else {
    body.style.background = `url(${backgroundBackup.imageURL})`;
  }

  body.style.backgroundPosition = "center";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
  body.style.backgroundAttachment = "scroll";
}
