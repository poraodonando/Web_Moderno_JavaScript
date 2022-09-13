/**
 * Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá
 * cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no
 * vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los no console. É importante lembrar 
 * que o método Push retorna somente o tamanho do Vetor. Ao final das operações imprima os
 * vetores no console.
 * 
 */

let vetorPilha = [];
let vetorAdiciona = [];

for(let i = 0; i < 5; i++ ){
        vetorPilha.push(i+1);
}

for(let j = 0; j < 5; j++){
    vetorAdiciona.push(6+j);
}

function somaVetores(vetA, vetB){
    for(k = 0; k < 5; k++ ){
       let [k] = vetA.push( vetB[k]);
    }

    return soma[k];
}

console.log(vetorPilha);
console.log(vetorAdiciona);
const soma = somaVetores(vetorAdiciona,vetorPilha);
console.log(soma);
 
