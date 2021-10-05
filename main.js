
let table = document.getElementById('table');
let cells = Array.of(table.childNodes);

//Function for creating cells width specified id,height and width
function createCell(id, w, h) {
    let cell = document.createElement('div');
    cell.style.backgroundColor = 'white';
    cell.style.width = w + "px";
    cell.style.height = h + "px";
    cell.id = id;

    return cell;
}

//Create grid
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let cell = createCell(i, 37.5, 37.5);
        table.appendChild(cell);
        console.log(test);
    }
}

/*Add event listener on cells*/
console.log(cells)