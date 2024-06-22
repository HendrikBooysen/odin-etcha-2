

const display = document.getElementById('display');


function getBoard(size){
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

getBoard(25);