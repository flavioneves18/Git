// document.addEventListener('DOMContentLoaded', () => {
    let pessoas = [
        { nome: "Flavio", idade: "32" },
        { nome: "Carol", idade: "30" }
    ];

//     // Obtém referências aos elementos após o carregamento do DOM
    let nome = document.getElementById("nome");
    let idade = document.getElementById("idade");
    let incluirButton = document.getElementById("incluirButton");
    let resultado = document.getElementById("resultado")

    function incluir(parametro) {
        if (parametro == 1) {
            let novaPessoa = { nome: nome.value, idade: idade.value };   
            pessoas.push(novaPessoa);
            console.log("Array pessoas após inclusão:", pessoas); // Para verificar se o array foi atualizado
            function exibirNomes() {
                let nomes = pessoas.map(pessoa => pessoa.nome); // Cria um array com apenas os nomes
                resultado.innerText = nomes.join(', '); // Junta os nomes com vírgula e espaço
            }
        
            exibirNomes(); // Exibe os nomes ao carregar a página
        }
          
           else if (parametro == 2) { 
            // Outras ações
        }
    }

//     // Adiciona o evento de clique ao botão
    incluirButton.addEventListener('click', () => incluir(1));
// });













