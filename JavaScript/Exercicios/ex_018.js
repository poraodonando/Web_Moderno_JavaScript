/**
 * Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. 
 * Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */



function porExtenso(num){

    switch(num){
        
        case 0:
            return console.log(`${num} => ZERO`);
            break;
        case 1:
            return console.log(`${num} => UM`);
            break;  
        case 2:
            return console.log(`${num} +> DOIS`);
            break;  
        case 3:
            return console.log(`${num} => TRÊS`);
            break;  
        case 4:
            return console.log(`${num} => QUATRO`);
            break;  
        case 5:
            return console.log(`${num} => CINCO`);
            break; 
        case 6:
            return console.log(`${num} => SEIS`);
            break;  
        case 7:
            return console.log(`${num} => SETE`);
            break; 
        case 8:
            return console.log(`${num} => OITO`);
            break; 
        case 9:
            return console.log(`${num} => NOVE`);
            break;
        case 10:
            return console.log(`${num} => DEZ`);
            break;
        default:
            return console.log('Numero fora do intervalo');              
        
    }

}

porExtenso(1);
porExtenso(3);
porExtenso(0);
porExtenso(593);