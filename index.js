const container = document.querySelector(".container");
const button = document.querySelector(".button");
const clear = document.querySelector(".clear");
const defaultGrid = 16;

// Function to create the grid
function createGrid(n) {
  container.replaceChildren(); // Clear existing grid
  for (let i = 0; i < n; i++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    for (let j = 0; j < n; j++) {
      let gridPixel = document.createElement("div");
      gridPixel.classList.add("gridPixel");

      // Add event listener for mouseover
      gridPixel.addEventListener("mouseover", (event) => {
        mouseover(event);
      });

      gridRow.appendChild(gridPixel);
    }
    container.appendChild(gridRow);
  }
}

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function mouseover(e) {
  if (e.buttons === 1) {
    e.target.style.backgroundColor = getRandomColor();
    return;
  }
  e.target.style.backgroundColor = getRandomColor();
}

// Event listener for changing grid size
button.addEventListener("click", () => {
  let choice = prompt("Change Grid Size To:");
  let parsed = parseInt(choice, 10);
  if (!isNaN(parsed) && parsed >= 1 && parsed <= 100) {
    createGrid(parsed);
  }
});

// Event listener for clearing the grid
clear.addEventListener("click", () => {
  createGrid(defaultGrid); // Reset to default grid size
});

// Initial call to create the default grid
createGrid(defaultGrid);
