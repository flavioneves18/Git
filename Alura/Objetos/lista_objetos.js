const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  //primeira posição do array é um objeto
  cliente.enderecos = [{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  }];

  cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
  });

  //verifica no objeto cliente.endereços se o apartamento é true, se for ele guarda

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
  );
  
console.log(listaApenasApartamentos);

  