const livros = require('./listaLivros')

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let chave = arr[i];
      let j = i - 1;
      
      // Move os elementos do arr[0..i-1] que são maiores que chave
      while (j >= 0 && arr[j].preco > chave.preco) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = chave;
    }
  }

insertionSort(livros);
for (cont=0; cont < livros.length; cont++){ //mostra somente o titulo de cada livro
console.log(livros[cont].titulo)
};
