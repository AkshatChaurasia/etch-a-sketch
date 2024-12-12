const gridContainer = document.getElementById("grid-container");

let gridSize = 10;

const gridButton = document.getElementById("clear-button");

gridButton.addEventListener("click", () => {
  const userInput = prompt("Enter a number between 1 and 100");
  const parsedInput = parseInt(userInput, 10);

  if (parsedInput >= 1 && parsedInput <= 100) {
    gridSize = parsedInput;
  }
});
