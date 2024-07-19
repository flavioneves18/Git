function contar(){
var inic = document.getElementById('inicio')
var inicio = Number(inic.value)
var fi = document.getElementById('fim')
var fim = Number(fi.value)
var pa = document.getElementById('passo')
var passo = Number(pa.value)
var texto = document.getElementById('tex')
if (inicio == '0' || fim == '0' || passo == '0'){
    window.alert('Digite um número Válido')
}
else{
    var soma = inicio + passo
    texto.innerText = inicio
    while (soma<=fim){
        texto.innerText +=` \u{1F603} ` + soma
        var soma = soma + passo
    }
    texto.innerText +=' Fim ' 
}

}
