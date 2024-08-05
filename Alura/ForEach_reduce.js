const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

somajs=0;
somaJava=0;
somaPython=0;

salaJS.forEach((item) => {
    somajs+=item
    
});
console.log(`A média da sala de JavaScript foi ${somajs/salaJS.length}`)

salaJava.forEach((item) => {
    somaJava+=item
});
console.log(`A média da sala de Java foi ${somaJava/salaJava.length}`)

salaPython.forEach((item) => {
    somaPython+=item
});
console.log(`A média da sala de Python foi ${somaPython/salaPython.length}`)

