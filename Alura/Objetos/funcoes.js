const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor){
      if (valor > this.saldo ){
        console.log("Saldo Insuficiente")
      }
      else{
        this.saldo -= valor;
        console.log(`Pagamento Realizado. Novo Saldo: ${this.saldo} `)
      }
    }
  };

  cliente.efetuaPagamento(40);

  const cliente2 = {
    nome: "Joao",
    idade: function(ida) {
        if (ida < 18) {
            this.idade = `Menor de Idade, ${this.nome} tem apenas ${ida} anos`;
        } else {
            this.idade = `Maior de Idade, ${this.nome} Já tem ${ida} anos`;
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
    cliente2.idade(20)
    console.log(cliente2)
