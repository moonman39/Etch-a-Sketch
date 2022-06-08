// Creating default 16 x 16 grid
const container = document.querySelector(".sketch-container");

const defaultGrid = () => {
  for (let i = 1; i < 257; i++) {
    container.innerHTML += `<div class="box box-${i}"</div>`;
  }
};

defaultGrid();

const box = Array.from(document.querySelectorAll(".box"));
console.log(box);

// box.addEventListener("mouseover", () => {
//   box.classList.add("black-background");
// });

box.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.classList.add("black-background");
  });
});
