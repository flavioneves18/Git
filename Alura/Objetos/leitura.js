const dados = require("./cliente.json")


const clienteEmString = JSON.stringify(dados) //Transforma o Objeto em String
const objetoCliente = JSON.parse(clienteEmString) //transofmra string em objeto de novo


