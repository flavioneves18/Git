function assincronaQuePodefalhar (parametro){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(parametro){
                resolve("Promessa Cumprida")
            } else {
                reject(new Error ("A promessa não foi cumprida"))
            }
        }, 2000)

    })
}



assincronaQuePodefalhar(true).then((resultado) => {
        console.log(resultado)
    }).catch((erro)=>{
        console.log(erro)
    });