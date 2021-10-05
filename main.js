
let table = document.getElementById('table');

//Function for creating cells width specified id,height and width
function createCell(w, h) {
    let cell = document.createElement('div');
    cell.style.backgroundColor = 'white';
    cell.style.width = w + "px";
    cell.style.height = h + "px";

    return cell;
}

//Create grid
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let cell = createCell(37.5, 37.5);
        table.appendChild(cell);
    }
}

//Change cell color
function changeCellColor() {
    if (this.style.backgroundColor != 'black') {
        this.style.backgroundColor = 'black';
    }
}

let cells = table.childNodes;

/*Add event listener on cells*/
cells.forEach(cell => {
    cell.addEventListener('mouseenter', changeCellColor);
});

/* function to clear grid */
function clearTable() {
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

/* Add event listener on clear button to clear table*/
let clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearTable);

let slider = document.getElementById('slideBar');
console.log(slider.value);
slider.value = 30;