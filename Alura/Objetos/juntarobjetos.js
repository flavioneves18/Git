const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

   const personagem = {
        ...fichaGuerreiro,
        ...equipoGuerreiro
   }
   console.log(personagem)