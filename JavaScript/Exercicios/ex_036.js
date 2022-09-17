/**
 * Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um
 * número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da 
 * multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o 
 *  mesmo da primeira se e somente se o valor do elemento for maior que 5.
 */

function multiplica(inteiro, num){
    
   let vetRes = [];

   inteiro.forEach(element => {
        vetRes.push(element * num);
   });

   return vetRes;
 
      
}


inteiro = [1, 2, 3, 4, 5];
num = 3;

console.log(multiplica( inteiro, num));