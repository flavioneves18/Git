function fetchData (callback) {
    setTimeout(() => {
        const data = "Dados Obtidos";
        callback(data);
    }, 2000);
}

function processData(data){
    console.log(`Processando dados: ${data}`);
}

fetchData(processData);