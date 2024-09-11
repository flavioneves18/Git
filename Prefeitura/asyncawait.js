async function exemploAsync(){
return 123;
}

async function exemploAwait(){
    let resultado = await exemploAsync();
    console.log(resultado)
}

exemploAwait();
