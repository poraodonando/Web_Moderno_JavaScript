/**
 * Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média
 * ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas
 * restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem
 * "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. 
 * Repita a operação até que o código lido seja negativo.
 */

function calculaMedia(nota_a, nota_b, nota_c){

    let peso_4 = 4, peso_3 = 3, nota4, nota3_a,nota3_b;

        if(nota_a > nota_b && nota_a > nota_c){
                nota4 = nota_a;
                nota3_a = nota_b;
                nota3_b = nota_c;


        }else if(nota_a > nota_c){
                nota4 = nota_b;
                nota3_a = nota_a;
                nota3_b = nota_b
        }else{
                nota4 = nota_c;
                nota3_a = nota_a;
                nota3_b = nota_b;

        }
    
        media = (nota4 * 4 + nota3_a * 3 + nota3_b * 3)/ (peso_4 + 2 * peso_3);
        if(media >= 5){
            return console.log(`APROVADO com média ${media}`);
        }else{
            return console.log(`REPROVADO com média ${media}`);    
        }
        
    
}

calculaMedia(5,5,5);
calculaMedia(2,3,1);
calculaMedia(3,1,2);

