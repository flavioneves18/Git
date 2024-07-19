function soma (n1, n2){
var txt = document.getElementById('texto')
var n1 = Number(document.getElementById('num1').value);
var n2 = Number(document.getElementById('num2').value);    
var adicao = n1 + n2   
txt.innerText = `A soma dos números: ${n1} e ${n2} é: ${adicao}`
}
soma(n1,n2)
function subtracao (n1, n2){
    var txt = document.getElementById('texto')
    var n1 = Number(document.getElementById('num1').value);
    var n2 = Number(document.getElementById('num2').value);    
    var diminuir = n1 - n2   
    txt.innerText = `A Subtração dos números: ${n1} e ${n2} é: ${diminuir}`
    }  
subtracao(n1,n2)






