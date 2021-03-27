const container = document.getElementById('grid-container');
const resetGridButton = document.getElementById('reset-grid');
const newGridButton = document.getElementById('new-grid');
const gridSize = document.getElementById('size-slider');
const sizeLabel = document.getElementById('size-label');

let cellArray = [];

//Function to create the grid
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        cell.addEventListener('mouseover', function () {
            this.classList.add('change-color');
        });
        cellArray.push(cell);
        // cell.innerText = i + 1;
        container.appendChild(cell).className = 'grid-item';
    }
}

//draw initial grid
makeGrid(16, 16);

function makeNewGrid() {
    document.querySelectorAll('.grid-item').forEach((e) => e.remove());
    makeGrid(gridSize.value, gridSize.value);
}

//make a new grid based on slider size
newGridButton.addEventListener('click', function () {
    document.querySelectorAll('.grid-item').forEach((e) => e.remove());
    makeGrid(gridSize.value, gridSize.value);
});

//reset the grid when the reset button is clicked
resetGridButton.addEventListener('click', removeColor);
function removeColor() {
    for (let i = 0; i < cellArray.length; i++) {
        cellArray[i].classList.remove('change-color');
    }
}

//set and show the size of the current grid
sizeLabel.textContent = gridSize.value;
gridSize.addEventListener('mousemove', function () {
    sizeLabel.textContent = gridSize.value;
    // setTimeout(makeNewGrid, 100);
    makeNewGrid();
});
gridSize.addEventListener('mouseup', function () {
    //makeNewGrid();
});
