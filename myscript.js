document.addEventListener('DOMContentLoaded', function(){

const gridside = 600;
let squaresSide = 16;
squaresSide = prompt( "enter num of squares", "16");

const sketchArea = document.querySelector("#sketchArea")

function createCells() {
    let numSquares = squaresSide * squaresSide;
    for(let i = 0; i < numSquares; i++) {
        const gridCells = document.createElement('div');
        gridCells.classList.add("cells");
        gridCells.style.width = `${(gridside / squaresSide) - 2}px`;
        gridCells.style.height = `${(gridside / squaresSide) - 2}px`;
        sketchArea.appendChild(gridCells);

        gridCells.addEventListener('mousedown', function(event) {
            draw(event.target);
        });
        gridCells.addEventListener('mouseenter', function(event) {
            if (event.buttons === 1) {
                draw(event.target);
            }
        });
    }
}
function draw(cell) {
    cell.style.backgroundColor = 'black';
}

createCells();
})