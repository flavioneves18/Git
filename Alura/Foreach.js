const usuarios = [
    {nome: "Rodolfo", idade: 33, contato: "(71)12345-8452"},
    {nome: "Adilson", idade: 16, contato: "(71)12345-8252"},
    {nome: "Mizerê", idade: 32, contato: "(71)14345-8452"},
]
//retorna três parametros: Item, Index e Array
var contador =0;
var maiores = [];
usuarios.forEach(function(item){
    if (item.idade > 18){
    contador++;
    maiores.push(item.nome)
    }});
    console.log(`Existem ${contador} com mais de 18 anos que são: ${maiores}`)

   
 

    
 