// Creating default 16 x 16 grid
const container = document.querySelector(".sketch-container");
const defaultGrid = () => {
  for (let i = 1; i < 257; i++) {
    container.innerHTML += `<div class="box box-${i}"</div>`;
  }
};
defaultGrid();

// A variable to get a random number between 0 and 255 for rgb
const rgb = () => {
  let number = Math.floor(Math.random() * 256);
  return number;
};

// A function to change the color of the sketch to black
let box = Array.from(document.querySelectorAll(".box"));
box.forEach((box) => {
  // box.addEventListener("mouseover", () => {
  //   box.classList.add("black-background");
  // });
  box.addEventListener("mouseover", () => {
    box.style["background-color"] = `rgb(${rgb()}, ${rgb()}, ${rgb()})`;
  });
});
// Allowing the user to change the size of the box
const button = document.querySelector(".user-choice");

let userChoice;
let newBoxes;

button.addEventListener("click", () => {
  // Gather the user choice
  userChoice = prompt(
    "How many dimensions do you want on each side of the box?"
  );
  while (userChoice > 31 || userChoice < 1) {
    userChoice = prompt(
      "How many dimensions do you want on each side of the box? (Min is 1 Max is 30)"
    );
  }

  // Adding new box based on user choice
  container.classList.remove("sketch-container");
  container.classList.add("new-container");
  container.style["display"] = "grid";
  container.style["grid-template-columns"] = `repeat(${userChoice}, 1fr)`;
  container.style["grid-template-rows"] = `repeat(${userChoice}, 1fr)`;

  //

  const newGrid = () => {
    container.innerHTML = "";
    for (let i = 1; i < userChoice * userChoice + 1; i++) {
      container.innerHTML += `<div class="box box-${i}"</div>`;
    }
  };
  newGrid();
  box = document.querySelectorAll(".box");
  box.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style["background-color"] = `rgb(${rgb()}, ${rgb()}, ${rgb()})`;
    });
  });
});

// A function to clear the sketch
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  box.forEach((box) => {
    box.style["background-color"] = "white";
  });
});
