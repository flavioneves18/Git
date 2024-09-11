const USER_INPUT = document.getElementById('user-input');
const LIST_CONTAINER = document.getElementById('list-container');
// const BTN_ADD = document.getElementById('btn-add');


function addTask () {
    if(USER_INPUT.value == "") {
        alert("Você precisa escrever algo");
            } 
    else {
        const item_lista = `<li>${USER_INPUT.value} <span></span></li>`;
        LIST_CONTAINER.innerHTML += item_lista;
        // console.log(LIST_CONTAINER.innerHTML);
        saveData();
    }
}

function saveData () {
    const LIST_CONTAINER = document.getElementById('list-container');
    localStorage.setItem('data',LIST_CONTAINER.innerHTML);
}

// BTN_ADD.addEventListener('click',addTask);
