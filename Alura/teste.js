const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    IMC: function(){

          return this.peso/(Math.pow(this.altura,2));
    },
};

for (let campos in paciente) {
    if (typeof paciente[campos] == 'function') {
      console.log(`${campos}: ${paciente[campos]()}`); // Chama a função e exibe o resultado
    } else {
      console.log(`${campos}: ${paciente[campos]}`); // Exibe o valor das propriedades
    }
  }





