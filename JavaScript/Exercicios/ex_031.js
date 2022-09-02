/**
 * Escrever um algoritmo que percorre um vetor de inteiros, conta quantos 
 * números negativos há nesse vetor e imprime a quantidade no console.
 */

let vet2 = [2,7,-3,3,-54,6,-34,-4,6,2,-65];
let qtdNeg = 0;


for(let i = 0; i < vet2.length; i++){

    if(vet2[i] < 0){
        qtdNeg++;
    }
}

console.log(`Quantidade de negativos: ${qtdNeg}`);
