const notas = [10, 6.5, 8, 7.5];
 var contador = 0
 var soma =0
notas.forEach((item,indice) => {
    soma += item
    contador++ 
    
});
let media = soma / contador
console.log(media)  




