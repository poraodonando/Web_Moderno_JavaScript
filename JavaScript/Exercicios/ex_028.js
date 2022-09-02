/**
 * Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

let vetor = [1,2,3,4,5,6,7,8,9,10];
let qtdPar = 0;

for(let i = 0; i <vetor.length; i++){

    if(vetor[i] % 2 == 0){
          qtdPar+=1;
    }

}

console.log(`Quantidade de Numeros de PARES: ${qtdPar}`);

