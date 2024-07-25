function clicou(){
    nome = document.getElementById('nome').value
    telefone = document.getElementById('telefone').value
    resultado = document.getElementById('result')
    resultado.innerText = `Olá ${nome}, seu telefone é: ${telefone}`
}



