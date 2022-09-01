/**
 * Um funcionário irá receber um aumento de acordo com o seu plano de 
 * trabalho, de acordo com a tabela abaixo:
 *
 *           Plano Aumento 
 *            A    10%
 *            B    15%
 *            C    20%
 * 
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e
 * imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o
 * plano é inválido.
 */

function planoTrabalho(plano, salario){

    let novo_salario;

    switch(plano){
        case 'A':
            novo_salario = salario * 1.1  
            return console.log(`Novo Salário: ${novo_salario}`);
            break;
        case 'B':
            novo_salario = salario * 1.15;
            return console.log(`Novo Salário: ${novo_salario}`);  
            break;
        case 'C':
            novo_salario = salario * 1.2;
            return console.log(`Novo Salário: ${novo_salario}`);  
            break;
        default:
            return console.log('Plano inválido');
    }

}


planoTrabalho('A', 4300);
planoTrabalho('B', 4300);
planoTrabalho('C', 1100);