function verificar(){
var id = document.getElementById('id')
var data = new Date()
var anoatual = data.getFullYear()
var anona = Number(id.value)
var idade = anoatual-anona
var sex = document.getElementsByName('se')
var genero = ''
var mensagem = document.getElementById('msg')
var img = document.getElementById('imagem')

if (sex[0].checked) {
genero='Homem'
mensagem.innerHTML = `Você é um Homem de ${idade} Anos`
img.src = 'homem.jpg'

} else if (sex[1].checked) {
    genero = 'Mulher'
    mensagem.innerHTML = `Você é uma Mulher de ${idade} Anos`
    img.src = 'mulher.jpg'
}

}