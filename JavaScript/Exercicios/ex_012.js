/**
 * Faça um algoritmo que calcule o fatorial de um número.
 */

function fatorial(num){
    let fat = 1;
    

    for(let i = fat; i <= num; i++ ){
        fat *= i;
        
    }

    return console.log(`O fatorial de ${num} é ${fat}`);
}

fatorial(6);
fatorial(5);
fatorial(4);
fatorial(3);