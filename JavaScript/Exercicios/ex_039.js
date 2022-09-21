/**
 * Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
 * primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim 
 * sucessivamente.
 * Faça a troca sem utilizar uma variável auxiliar.
 */

function trocaVetor(vetorA, vetorB){
    trocaA = vetorA.map(vetorB);
    return console.log(trocaA);

}

vetorA = [1, 2, 3, 4];
vetorB = [4, 3, 2, 1];

trocaVetor(vetorA,vetorB);