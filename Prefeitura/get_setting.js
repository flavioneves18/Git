class Mamifero {
    constructor(nome,raca,cor,tamanho,peso,patas,castrado){
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.tamanho = tamanho;
        this.peso = peso;
        this.patas = patas;
        this.cortou = castrado;
    }
    getNome () {
        return this.nome
        
    }
};

const meucachorro = new Mamifero("putuco","cao","preto","medio","10","4","nao")
console.log(meucachorro.getNome())

// SET seta o valor lá na propriedade




