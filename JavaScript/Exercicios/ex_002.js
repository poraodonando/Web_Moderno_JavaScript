/**
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. 
 * Isósceles: Dois lados iguais. 
 * Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua 
 * classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições
 *  matemáticas de existência de um triângulo).
 */

function triângulo(lado_A, lado_B, lado_C){

    if(lado_A == lado_B && lado_B == lado_C ){
        tipo = 'Equilatero';
    } else if(lado_A != lado_B && lado_B != lado_C ) {
        tipo = 'Escaleno';
    }else {
        tipo = 'Isósceles';
    }


    return console.log(`triangulo ${tipo}`);

}

const triangulo_a = triângulo(3, 3, 3);
const triangulo_b = triângulo(1, 2, 3);
const triangulo_c = triângulo(2, 2, 1);
