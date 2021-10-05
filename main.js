const tableSize = document.querySelector('#table').offsetWidth;
let numberOfCells = 16;

let table = document.getElementById('table');


//Function for creating cells width specified id,height and width
function createCell(size) {
    let cell = document.createElement('div');
    cell.style.backgroundColor = 'white';
    cell.style.width = size + "px";
    cell.style.height = size + "px";

    return cell;
}

function clearTable() {
    if (table.firstChild === null) {
        return;
    }

    const n = table.children.length;

    for (let i = 0; i < n; i++) {
        table.removeChild(table.firstChild);
    }
}


//Create grid
function createGrid(n) {

    clearTable();

    table.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    table.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    let cellSize = tableSize / n;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let cell = createCell(cellSize);
            table.appendChild(cell);
        }
    }
}


function getRandomRGBA(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let a = Math.random().toFixed(1);

    console.log(`rgba(${r},${g},${b},${a})`);
    return `rgba(${r},${g},${b},${a})`;
    
}


//Change cell color
function changeCellColor() {
    let activeElement = document.querySelector('.active');

    if (activeElement.id === 'eraser-btn') {
        this.style.backgroundColor = 'white';
    } else if (activeElement.id === 'color-btn') {

        let palete = document.getElementById('palete');
        this.style.backgroundColor = palete.value;
    } else if (activeElement.id === 'rainbow-btn') {
        this.style.backgroundColor = getRandomRGBA();
    }
}

let cells = table.childNodes;

/*Add event listener on cells*/
function addListenerToCells() {
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', changeCellColor);
    });
}


/* Function for ereasing table */
function ereaseTable() {
    cells.forEach(cell => cell.style.backgroundColor = 'white');
}


/* Add event listener on clear button to clear table*/
let clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', ereaseTable);


/* Make slider label value change based on input range*/
let slider = document.getElementById('slideBar');
let silderLabel = document.querySelector('label');

slider.addEventListener('mouseup', (e) => {
    silderLabel.textContent = e.target.value + "x" + e.target.value;
    numberOfCells = e.target.value;
    createGrid(numberOfCells);
    addListenerToCells();
})

/* Add event listener to focus clicked button*/
let buttons = document.querySelectorAll('button');

function removeBtnActive() {
    buttons.forEach(btn => btn.classList.remove('active'));
}

buttons.forEach(btn => btn.addEventListener('click', (e) => {
    if (e.target.id === "clear-btn") {
        return;
    }
    removeBtnActive();
    e.target.classList.add('active');
}));

/* Main */
createGrid(slider.value);
addListenerToCells();
