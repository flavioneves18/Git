let valor = 6
let numeros = [1,2,3,4,5];
//numeros.pop() retira o ultimo valor
let lista1 = numeros.slice(0,3); //intervalo para trazer, mas tem que guardar em uma variável
numeros.push(valor); // insere valor
console.log(numeros);
console.log(lista1);

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(
    `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.`
);
// splice >>>> remove e insere intens... com o indice ele exclui e com o parentese inclui

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

const notas = [7, 7, 8, 9];
const novasNotas = [...notas, 10]; //cloca o array de cima e adciona valor na cópia

ELIMINAR OS DUPLICADO:

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);



