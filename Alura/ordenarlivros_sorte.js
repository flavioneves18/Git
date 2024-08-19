const livros = require('./listaLivros'); //conecta ao outro arquivo declarado no export

livros.sort((a, b) => {
    
    const precoA = a.preco;
    const precoB = b.preco;

    if (precoA < precoB) {
        return -1;
    }
    if (precoA > precoB) {
        return 1;
    }
    return 0;
});

let cont=0;
while (cont < livros.length) {
    console.log(livros[cont].titulo)
    cont++;
};


