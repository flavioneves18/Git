const USER_INPUT = document.getElementById('user-input');
const BTN_ADD = document.getElementById('btn-add');
const LIST_CONTAINER = document.getElementById('list-container');

const addTask = () => {
    if(USER_INPUT.value === "") {
        alert("Você precisa escrever algo");
    } 
    else {
        const item_lista = `<li>${USER_INPUT.value}<span>X</span></li>`;
        LIST_CONTAINER.innerHTML += item_lista;
        saveData();
        
    }

    USER_INPUT.value = "";
}

const saveData = () => {
    const LIST_CONTAINER = document.getElementById('list-container');
    const currentData = LIST_CONTAINER.innerHTML;
    console.log(currentData);
    localStorage.setItem('data',currentData);
}

// const showData = () => {
//     const LIST_CONTAINER = document.getElementById('list-container');
//     const currentData = localStorage.getItem('data');
//     LIST_CONTAINER.innerHTML = currentData;
// }

// showData();
BTN_ADD.addEventListener('click',addTask);
LIST_CONTAINER.addEventListener('click',function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } 
} )