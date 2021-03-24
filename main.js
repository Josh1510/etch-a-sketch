const container = document.getElementById("grid-container");
const resetButton = document.getElementById("reset");

let cellArray = [];

//Function to create the grid
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", function () {
      this.classList.add("change-color");
    });
    cellArray.push(cell);
    // cell.innerText = i + 1;
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);

resetButton.addEventListener("click", removeColor);

function removeColor() {
  for (let i = 0; i < cellArray.length; i++) {
    cellArray[i].classList.remove("change-color");
  }
}
