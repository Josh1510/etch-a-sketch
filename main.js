// const bodySelector = document.querySelector("body");

// for (i = 0; i < 16; i++){

//     for (j = 0; j < 16; j++){

//     }
// }

// function createSquare(){
//     var etchSquare = document.createElement('div');
//     bodySelector.append(etchSquare);
// }

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);
