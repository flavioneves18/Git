const alunos = ["João","Juliana", "Ana", "Caio"];
const medias = [10,8,7.5,9];
const listaDeAlunos = [alunos,medias];

function alunoMedia (aluno){
    if (listaDeAlunos[0].includes(aluno)){
        //const alunos = listaDeAlunos[0]
        //const medias = listaDeAlunos[1]
        const [alunos, medias] = listaDeAlunos; // crio duas constantes do mesmo jeito da listaDeAlunos
        const indice = alunos.indexOf(aluno)
        const media = medias[indice]
        console.log(`${aluno} está cadastrado com média ${media}`);
     
    }
    else{
        console.log(`Aluno(a) ${aluno} Não cadastrado(a)`)
    }
}
alunoMedia("Juliana");





