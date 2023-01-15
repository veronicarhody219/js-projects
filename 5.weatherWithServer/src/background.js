export default async function fetchBackground(searchTerm) {
  const body = document.querySelector("#body");

  let URLmain = `http://localhost:8888/background/${encodeURIComponent(
    searchTerm
  )}`;
  let URL = `http://localhost:8888/background/`;

  const res = await fetch(URLmain);
  console.log(URLmain)
  const data = await res.json();
  let random = Math.floor(Math.random() * 20);
  let background = data[random];

  const resBackup = await fetch(URL);
  const dataBackup = await resBackup.json();
  let backgroundBackup = dataBackup[random];
  console.log("image from URLmain:", background);
  console.log("image from URL:", backgroundBackup);
  try {
    body.style.background = `url(${background.imageURL})`;
  } catch (error) {
    body.style.background = `url(${backgroundBackup.imageURL})`;
    console.log(error);
  }

  body.style.backgroundPosition = "center";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
  body.style.backgroundAttachment = "scroll";
}
