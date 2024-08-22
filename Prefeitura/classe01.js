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
};

class Cachorro extends Mamifero { // Cria outra classe com as mesmas caracteristicas do anterior


}

const Teddy = new Cachorro ("Teddy","viralata","Amarelo","pequeno","4k","4","Não");
const Lucky = new Cachorro ("Lucky","viralata","brancopreto","pequeno","4k","4","Não");

console.log(Lucky.nome,"e", Teddy.nome)



