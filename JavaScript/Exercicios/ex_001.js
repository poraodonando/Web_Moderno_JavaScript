/**
 * Crie uma função que dado dois valores (passados como parâmetros) 
 * mostre no console a soma, subtração,
 * multiplicação e divisão desses valores.
 */


function calc(num1, num2){
    soma = num1 + num2;
    sub = num1 - num2;
    mult = num1 * num2;
    div = num1 / num2;

    console.log(`soma: ${soma}`);
    console.log(`subtração: ${sub}`);
    console.log(`divisao: ${div}`);
    console.log(`multiplicacao: ${mult}`);
    console.log('-------------------')
}


calc(3,4);
calc(2,-5);
calc(-4,0.654)
