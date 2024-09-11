function lampada(n){
    imagem = document.getElementById("imagem")
    if (n==1){
      imagem.src = "./on.jpg"  
    }
    else {
        imagem.src = "./off.jpg" 
    }
}