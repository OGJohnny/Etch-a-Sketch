let color = 'black';
let click = true;

function buildGrid(size) {
    const grid = document.querySelector('.grid');
    let cells = grid.querySelectorAll('div');
    cells.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;

    for(let i = 0; i < amount; i++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", colorCell);
        cell.style.backgroundColor = "white";
        grid.insertAdjacentElement("beforeend", cell);
    }
}

buildGrid(8);

function colorCell() {
    if(click) {
        if(color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else if(color === "white") {
            this.style.backgroundColor = 'white';
        } 
        else {        
            this.style.backgroundColor = 'black';
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function popUp() {
    let input = prompt("ENTER A VALUE BETWEEN 2 AND 100 TO BUILD YOUR GRID");

    if(input < 2 || input > 100) {
        prompt("The number you've entered is not between 2 and 100. Please enter another number.");
        popUp();
    } else {
        buildGrid(input);
    }
}

function resetBoard() {
    const grid = document.querySelector('.grid');
    let cells = grid.querySelectorAll('div');
    cells.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector("body").addEventListener("click", () => {
    click = !click;
});