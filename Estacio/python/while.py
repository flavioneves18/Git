palavra = input('Digite o comando: ')
count = 0
palavras = []
while palavra != "sair":
        palavra = input('Digite o comando: ')
        count += 1
        palavras.append(palavra)
print (f'Programa encerrado, foram digitadas {count} palavras, e as palavras foram: {palavras}')
