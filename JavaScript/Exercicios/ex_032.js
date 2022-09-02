/**
 * Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */


let vet3 = [4,2,6,2,5,5,1,8,3,6];
let media, soma = 0, tamanho = vet3.length;

for(let i = 0; i < vet3.length; i++){
        
    soma += vet3[i];
}

media = soma /tamanho;

console.log(`A média é ${media}`);