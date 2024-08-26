class Mamifero:
    def __init__(self, nome, cor, anonascimento):
        self.nome = nome
        self.cor = cor
        self.idade = 2024-anonascimento

# Criando uma instância da classe Carro
Cachorro = Mamifero('Teddy', 'preto_branco', 2020)

print("Nome: ", Cachorro.nome)  # Saída: Toyota
print("Cor: ", Cachorro.cor) # Saída: Corolla
print("Idade: ", Cachorro.idade)    # Saída: 2020

