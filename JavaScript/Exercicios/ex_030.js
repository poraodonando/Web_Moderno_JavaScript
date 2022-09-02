/**
 * Escreva um algoritmo que percorre um vetor de inteiros 
 * e defina o maior e menor valor dentro do vetor.
 */

let vet1 = [3,85,24,-43,75,35,5,38,-32,75,43];

let maior = 0, menor = 0;


for(let i = 0; i < vet1.length; i++ ){
    
    if(vet1[i] > maior){
            maior = vet1[i]
    }
    if(vet1[i] < menor){
        menor = vet1[i]
    }
}

console.log(`Maior: ${maior}\nMenor: ${menor}`);