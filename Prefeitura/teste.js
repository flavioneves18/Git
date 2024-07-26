//function clicou(){
    //nome = document.getElementById('nome').value
    //telefone = document.getElementById('telefone').value
    //resultado = document.getElementById('result')
    //resultado.innerText = `Olá ${nome}, seu telefone é: ${telefone}`
//}

// Arquivo procurando-aluno.js

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado!`);
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Aline");