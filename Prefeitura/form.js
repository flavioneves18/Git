const cadastrarpessoa2 = ()=> {
    const nomeDoUsuario = document.querySelector('input[name="nome"]').value;
    const idadeDoUsuario = document.querySelector('input[name="idade"]').value;
    const nacionalidadeDoUsuario = document.querySelector('input[name="nacionalidade"]').value;
    const PESSOAS = document.getElementById("pessoas");
    const novaPessoa = 
            `<div class="card_pessoas">
            <h2>${nomeDoUsuario}</h2>
            <p>${idadeDoUsuario}</p>
            <p>${nacionalidadeDoUsuario}</p>
            </div>;`
    PESSOAS.innerHTML += novaPessoa;
}

const BTN_CADASTRAR = document.getElementById("btn_cadastrar")
BTN_CADASTRAR.addEventListener('click', cadastrarpessoa2)