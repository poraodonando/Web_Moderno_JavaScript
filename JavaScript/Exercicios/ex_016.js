/**
 * Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. 
 * O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e 
 * a realize com os valores numéricos na ordem que foram inseridos. 
 * Por exemplo: calculadora (2, ‘+’, 3).
 *  A função efetuará a soma de 2 e 3. 
 * Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default 
 * para operações inválidas.
 */


function calculadora(num_a, sinal, num_b){

    switch(sinal){
        case '+':
            return console.log(num_a + num_b);
            break;        
        case '-':
            return console.log(num_a - num_b);
            break;  
        case '*':
            return console.log( num_a * num_b);
            break;  
        case '/':
            return console.log(num_a / num_b);
            break; 
        default:
            return console.log('Operação inválida!')


    }

}

calculadora(3,'*',6);
calculadora(2,'/',5)

