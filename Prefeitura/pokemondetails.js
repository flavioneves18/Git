let pokemon = localStorage.getItem('Pokemon');
pokemon = JSON.parse(pokemon);
const display2 = document.getElementById('display2');

const carregarPokemon = (objeto) => {
    if(objeto === undefined || objeto === null) {
        objeto = pokemon;
    }

    console.log(objeto)
    let div = `<div>
        <div>
            <h2>${objeto.name}</h2>
            <p>${objeto.types[0].type.name}</p>
        </div>
        <div> 
            <img src="${objeto.sprites.other.dream_world.front_default}"  />
        </div>
    </div>`;
    display2.innerHTML += div;
}

carregarPokemon();