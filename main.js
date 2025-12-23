const container = document.getElementById("container");
const columns = 16;
const grid = columns * columns;
const containerSize = 900;
const squareSize = containerSize / columns;

container.style.setProperty("--box-size", `${columns}`);

const setGrid = () => {
  for (let i = 1; i <= grid; i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    container.appendChild(newBox);
    newBox.addEventListener("mouseover", (hover) => {
      hover.target.style.backgroundColor = "red";
    });
  }
};

setGrid();
