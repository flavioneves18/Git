function contar(){
var num = document.getElementById('num')
var numero = Number(num.value)

if ( numero < 0 || numero > 100 ){
    alert('Digite um Número Válido')
}

else {

    let result = document.getElementById('resul');
    let opcoes = result.querySelectorAll('option');
    
    let encontrouNumero = false;

    opcoes.forEach(function(opcao) {
        if (opcao.value == numero) {
            encontrouNumero = true; // Define a variável de controle como true
            return; // Retorna para sair da função callback forEach
        }
    });

    if (encontrouNumero) {
        alert('Número já existente');
        document.getElementById('num').value = '';
       
        
    } else {
        let option = document.createElement('option');
        option.value = numero;  
        option.textContent = `Número ${numero} digitado`  
        let selectElement = document.getElementById('resul');
        selectElement.appendChild(option);
        document.getElementById('num').value = '';
    }



        


        


        
   
    
}

}

function final(){
      
      document.getElementById('texto').innerText='teste'
    }



    