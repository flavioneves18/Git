function carregar(){
var msg = document.getElementById('msg')
var msg2 = document.getElementById('msg2')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerText = `Agora são ${hora} horas`

switch (true){
    case hora <= 12 :
        msg2.innerText = 'Bom Dia !'
        img.src = 'manha.jpg'
        
        break
    case hora > 12 && hora < 18 :
        msg2.innerText = 'Boa Tarde !'
        img.src = 'tarde.jpg'
        break
    case hora >= 18 :
        msg2.innerText = 'Boa Noite !'
        img.src = 'noite.jpg'
        break 
}

}