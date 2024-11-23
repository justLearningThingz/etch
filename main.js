const container = document.querySelector(".container");
const backup = 16;
let input = 0;
const button = document.querySelector(".btn");

function createGrid(){
    console.log(backup);
    let gridSize = (input>0) ? input : backup;
    console.log(gridSize);

    for(let i = 0; i<gridSize; i++){
        const yDiv = document.createElement("div");
        yDiv.classList.add("yDiv");
        container.appendChild(yDiv)
        for(let j = 0; j<gridSize; j++){
            const xDiv = document.createElement("div");
            // xDiv.textContent = "X" ;
            xDiv.classList.add("box");
            xDiv.addEventListener("mouseover", ()=>{xDiv.style.backgroundColor = "blue";});
            yDiv.appendChild(xDiv)
        }
    } 
}

function removeChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

button.addEventListener("click", ()=>{
    input=101;
    while(input>100){
        input = prompt("enter desired grid size - max 100");
    }
    removeChildren(container); 
    createGrid();
});

createGrid(16);