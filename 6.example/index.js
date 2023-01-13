const car = document.querySelector(".car");
const cars = document.querySelectorAll(".car");
const raceContainer = document.querySelector(".race-container");
const raceBtn = document.querySelector(".btn-race");
const stopBtn = document.querySelector(".btn-stop");
const msg = document.querySelector(".msg");
console.log(car);
console.log(cars[0]);

let winner = [];
let raceCars = [];
let x_position = 0;
let windowWidth = document.body.clientWidth - 200;

cars.forEach((item) => {
  item.addEventListener("click", () => {
    handleClick(item);
    raceCars.forEach((item) => {
      console.log("I am an element from raceCars");
    });
  });
});

function handleClick(car) {
  if (raceCars.length < 2) {
    raceCars.push(car);
    for (let index = 0; index < raceCars.length; index++) {
      const carElement = document.createElement("div");
      carElement.appendChild(raceCars[index]);
      raceContainer.appendChild(carElement);

      raceBtn.addEventListener("click", () => {
        setInterval(() => {
          if (x_position < windowWidth) {
            x_position += Math.random() * 5;
            carElement.style.transform = `translateX(${x_position}px)`;
            console.log(`car ${index}`, x_position);
          }
        }, 20);
      });
      clearInterval();

      stopBtn.addEventListener("click", () => {
        // setInterval(() => {
        //   x_position += Math.random() * 5;
        //   carElement.style.left = x_position;
        //   console.log("current position:", carElement.style.left);
        // }, 20);
      });
    }
  } else {
    msg.textContent = "You already add two cars";
  }

  console.log(raceCars);
}
