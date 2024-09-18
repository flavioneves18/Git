const DISPLAY = document.getElementById('display');
const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";


const fetchPokemon = async () => {
     const retorno = await fetch(url).then((resposta) => resposta.json())
     const results = retorno.results;
     results.forEach(async (elemento) => {
        const pokemon = await fetch(elemento.url).then((dado) => dado.json())
        console.log(pokemon.sprites.other.showdown.front_default);
        const card = document.createElement('div');
        card.classList.add('card');
       const info = document.createElement('div');
       const h2 = document.createElement('h2');
       h2.innerText = pokemon.name;
       const link = document.createElement("a");
       const imageDiv = document.createElement('div');
       const image = document.createElement('img');
       info.appendChild(h2);
       card.appendChild(info);
       link.href = "/pokemondetails.html";
       image.src = pokemon.sprites.front_default;
       link.appendChild(image);
       imageDiv.appendChild(link);
       card.appendChild(imageDiv);

       h2.innerText = pokemon.name;
       info.appendChild(h2);
       card.appendChild(info);
       card.addEventListener('click',() => {
        localStorage.setItem('Pokemon',null);
        const dados = JSON.stringify(pokemon);
        localStorage.setItem('Pokemon',dados);
       })
        DISPLAY.appendChild(card);
     });
};

const bulbassauro = async () => {
    const bulbassauro = await fetch("https://pokeapi.co/api/v2/pokemon/1/").then((resposta) => resposta.json());
    console.log(bulbassauro.sprites.front_default);
    let image = document.createElement('img');
    image.src = bulbassauro.other.front_default;
    DI
}

fetchPokemon();