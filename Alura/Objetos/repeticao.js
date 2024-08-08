const cliente = {
    nome: "Joao",
    idade: function(ida) {
        if (ida < 18) {
            this.idade = "Menor de Idade";
        } else {
            this.idade = "Maior de Idade";
        }
    },
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = 
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    };
    cliente.idade(25)
    console.log(cliente)

   

   
  
  