import fs from 'fs';
import chalk from 'chalk';
import { error } from 'console';

function pegaArquivo (caminho){
    const encoding = 'utf-8';
    fs.readFile(caminho, encoding, (_, texto) => {
        console.log(chalk.green(texto));
    })   
}

pegaArquivo('./arquivos/texto.md');