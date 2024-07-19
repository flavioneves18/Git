function contar(){
var num = document.getElementById('num')
var numero = Number(num.value)

if (numero == ''){
alert('Digite Um Número')
}
else{
for (n=1; n<=10; n++) {
    var soma = ( numero * n )
    var one = document.getElementById(n).innerText= numero + ' x '+ n + ' = ' + soma
}
}
}