

const display = document.getElementById('display');
const resetButton = document.getElementById('resetButton');


let size = prompt("How many blocks do you want ?");

function getBoard(size){

    if(size > 100){

        display.textContent = " You have to chose below 100 ! Click the Reset Board button.";

    }else {
for(let i = 0; i < size; i++){

    const col = document.createElement('div');
    col.classList.add("col");
    display.appendChild(col);
    for(let j = 0; j < size; j++){
        const row = document.createElement('div');
        row.classList.add('row');
        col.appendChild(row);
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = "red";
        });           
        };  
       
};

};
};


function resetBoard(){
    const squares = document.querySelectorAll('.row');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
    location.reload();
};

resetButton.addEventListener('click', resetBoard);

getBoard(size);