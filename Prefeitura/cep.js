const CEP = document.getElementById("cep");
const BTN_CONSULTAR = document.getElementById("btn");
const RESULTADO = document.getElementById("resultado");

const fetchAdress = () => {
    let cepValue = CEP.value;
    let url = `https://viacep.com.br/ws//${cepValue}/json/`;
    let data;
    fetch(url)
    .then((resposta) => resposta.json())
    .then((infor) => {
        data = infor;
        console.log(data);
        RESULTADO.innerText = `${data.cep},${data.logradouro},${data.bairro}`
    })
    .catch((error) => {console.log(error.message)})  
}

const fetchAdress2 = async () => {
    let cepValue = CEP.value;
    let url = `https://viacep.com.br/ws//${cepValue}/json/`;
    try{
        const resposta = await fetch(url);
        const dados = await resposta.json();
        RESULTADO.innerText =  `${dados.cep},${dados.logradouro},${dados.bairro}`

    } catch (error) {
        alert`Erro na consulta`
    }


    console.log(dados);
}



BTN_CONSULTAR.addEventListener('click',fetchAdress2);