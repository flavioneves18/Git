function clicou () {
    // window.open("", "_blank", "width=300,height=150");
    // Obtenha os elementos do formulário
    const nome = document.getElementById('first-name');
    const sobrenome = document.getElementById('last-name');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('message');

    // Verifique se os campos estão vazios
    if (nome.value === '' || sobrenome.value === ''|| email.value === ''|| mensagem.value === '') {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return false; // Impede a submissão do formulário
    }
    else {
        return true;
        document.body.innerHTML = "Relatório Enviado"
    }
    // Se todos os campos estiverem preenchidos, permita a submissão
    
    // document.body.innerHTML = "Relatório enviado";
}