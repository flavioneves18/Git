// const Livro = function(nome, editora, paginas){
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//     this.getNome = function(){
//         return gNome
//     }
//     this.getEditora = function(){
//         return gEditora
//     }
//     this.getPaginas = function(){
//         return gPaginas
//     }
//     }
//     const Harry = new Livro ("Harry Potter","Harry",500)
//     console.log(Harry.getNome())
//     console.log(Harry.getEditora())
//     console.log(Harry.getPaginas())

//     const nome = "Alura"

class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}

const nodeJS = new Livro ("Harry", "Potter", 500)
nodeJS.descreverTitulo()



