// Creating default 16 x 16 grid
const container = document.querySelector(".sketch-container");
const defaultGrid = () => {
  for (let i = 1; i < 257; i++) {
    container.innerHTML += `<div class="box box-${i}"</div>`;
  }
};
defaultGrid();

// Changing the box backgrounds when hovered over
let box = document.querySelectorAll(".box");
box.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.classList.add("black-background");
  });
});

// Allowing the user to change the size of the box
const boxSize = document.querySelector(".user-choice");
let userChoice;

boxSize.addEventListener("click", () => {
  // Gather the user choice & make sure its between 1 and 30
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

  newGrid();
  box = document.querySelectorAll(".box");
  box.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style["background-color"] = "black";
    });
  });
});

// Clearing the sketch
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  box.forEach((box) => {
    box.style["background-color"] = "white";
  });
});

// Change squares to black
const black = document.querySelector(".black");
black.addEventListener("click", () => {
  box.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style["background-color"] = "black";
    });
  });
});

// Change squares to color
const color = document.querySelector(".color");
color.addEventListener("click", () => {
  box.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style["background-color"] = `rgb(${rgb()}, ${rgb()}, ${rgb()})`;
    });
  });
});

// A function to create new divs dependent on the user input
const newGrid = () => {
  container.innerHTML = "";
  for (let i = 1; i < userChoice * userChoice + 1; i++) {
    container.innerHTML += `<div class="box box-${i}"</div>`;
  }
};

// A variable to get a random number between 0 and 255 for rgb
const rgb = () => {
  let number = Math.floor(Math.random() * 256);
  return number;
};
