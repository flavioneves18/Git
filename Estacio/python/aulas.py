# print(list(range(2,10,2)))
# itens = [2,4,6,8,10]
# for item in itens:
#  print(item)
# nome = input('Digite um nome: ')
# for letra in nome:
#     print(letra)

par = []
impar = []
countpar = 0
countimpar = 0
for num in range(1,11):
    if num % 2 == 0:
        par.append(num)
        countpar += 1
    else:
       impar.append(num)
       countimpar += 1

print(f'identificamos {countpar} número pares, são eles: {par}')
print(f'identificamos {countimpar} número impares, são eles: {impar}')