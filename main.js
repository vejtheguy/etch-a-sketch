const containerSize = 600;
const container = document.getElementById("container");
const getGridSize = document.getElementById("gridSize");
const resizeBtn = document.getElementById("resizeBtn");
const gridSizeNum = document.getElementById("gridSizeNum");
const defaultSize = getGridSize.value;

resizeBtn.addEventListener("click", () => {
  setGrid(getGridSize.value);
});

getGridSize.addEventListener("input", (e) => {
  const size = e.target.value;
  gridSizeNum.textContent = `${size} x ${size}`;
});

const setGrid = (columns) => {
  container.textContent = "";
  container.style.setProperty("--box-size", `${columns}`);
  for (let i = 1; i <= columns * columns; i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    container.appendChild(newBox);
    newBox.addEventListener("mouseover", (hover) => {
      hover.target.style.backgroundColor = "red";
    });
  }
};

setGrid(getGridSize.value);
gridSizeNum.textContent = `${defaultSize} x ${defaultSize}`;
