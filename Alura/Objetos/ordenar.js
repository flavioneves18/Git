const clientes = require("./clientes.json")
clientes.sort((a, b) => {
    // Convertemos os nomes para minúsculas para garantir a comparação correta
    const nomeA = a.nome.toLowerCase();
    const nomeB = b.nome.toLowerCase();

    if (nomeA < nomeB) {
        return -1;
    }
    if (nomeA > nomeB) {
        return 1;
    }
    return 0;
});

console.log(clientes);