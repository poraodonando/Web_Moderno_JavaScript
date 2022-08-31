/**
 * Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado
 *  o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. 
 * Utilize a estrutura Switch.
 */

function dia_util(dia){

    switch(dia){
        case 1:
        case 7:
            return console.log(' É fim de semana!!!');
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return console.log(' É dia util');
            return;
        default:
            console.log('Dia inválido');    

    }

}

dia_util(2);
dia_util(7);
dia_util(8);