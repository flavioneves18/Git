const lista = [10,6.5,8,7.5]
var soma = 0

for (let indice = 0; indice< lista.length; indice++){
       var soma = (lista[indice] + soma)
           //console.log(`O Número ${lista[indice]} está no indice ${indice}`);
}
let media = (soma / lista.length)
console.log(media);

