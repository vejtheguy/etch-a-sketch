const containerSize = 600;
const container = document.getElementById("container");
const getGridSize = document.getElementById("gridSize");
const resizeBtn = document.getElementById("resizeBtn");
const gridSizeNum = document.getElementById("gridSizeNum");
const clearBtn = document.getElementById("clearBtn");
const toggleGrid = document.getElementById("toggleGrid");
const colorPicker = document.getElementById("colorPicker");
const colorMode = document.querySelectorAll("input[name='mode']");
const defaultSize = getGridSize.value;
let selectedColor = colorPicker.value;
let mode = "";

const randomNum = () => {
  return Math.floor(Math.random() * 256);
};

clearBtn.addEventListener("click", () => {
  setGrid(getGridSize.value);
});

colorPicker.addEventListener("input", (e) => {
  selectedColor = e.target.value;
});

colorMode.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    mode = e.target.id;
  });
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

const hoverColorMode = () => {
  if (mode === "rainbowMode") {
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
  } else if (mode === "eraseMode") {
    return "";
  } else {
    return `${selectedColor}`;
  }
};

const setGrid = (columns) => {
  container.textContent = "";
  container.style.setProperty("--box-size", `${columns}`);
  for (let i = 1; i <= columns * columns; i++) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    container.appendChild(newBox);
    newBox.addEventListener("mouseover", (hover) => {
      hover.target.style.backgroundColor = hoverColorMode();
    });
  }
};

setGrid(getGridSize.value);
gridSizeNum.textContent = `${defaultSize} x ${defaultSize}`;
