const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const notas = [10, 6.5, 8, 7.5];
 var contador = 0
 var soma =0
notas.forEach((item,indice) => {
    soma += item
    contador++ 
    });
let media = soma / contador


const reprovados = alunos.filter((nota,indice) => {
    return notas[indice] < 7;
  });
  
  console.log(reprovados);




