const container = document.querySelector(".sketch-container");
console.log(container);

const defaultGrid = () => {
  for (let i = 1; i < 257; i++) {
    container.innerHTML += `<div class="box box-${i}"</div>`;
  }
};

defaultGrid();
