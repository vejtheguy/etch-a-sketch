const containerSize = 600;
const container = document.getElementById("container");
const getGridSize = document.getElementById("gridSize");
const resizeBtn = document.getElementById("resizeBtn");
const gridSizeNum = document.getElementById("gridSizeNum");
const clearBtn = document.getElementById("clearBtn");
const toggleGrid = document.getElementById("toggleGrid");
const defaultSize = getGridSize.value;

const randomNum = () => {
  return Math.floor(Math.random() * 256);
};

clearBtn.addEventListener("click", () => {
  setGrid(getGridSize.value);
});

toggleGrid.addEventListener("change", (e) => {
  if (e.target.checked) {
    container.classList.add("outline");
  } else {
    container.classList.remove("outline");
  }
});

getGridSize.addEventListener("input", (e) => {
  const size = e.target.value;
  gridSizeNum.textContent = `${size} x ${size}`;
});

getGridSize.addEventListener("change", (e) => {
  const size = e.target.value;
  setGrid(size);
});

const setGrid = (columns) => {
  container.textContent = "";
  container.style.setProperty("--box-size", `${columns}`);
  for (let i = 1; i <= columns * columns; i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    container.appendChild(newBox);
    newBox.addEventListener("mouseover", (hover) => {
      hover.target.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    });
  }
};

setGrid(getGridSize.value);
gridSizeNum.textContent = `${defaultSize} x ${defaultSize}`;
