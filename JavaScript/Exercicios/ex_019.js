/**
 * O cardápio de uma lanchonete é o seguinte:
 * 
 *      Código      Descrição do Produto     Preço
 * 
 *      100         Cachorro Quente         R$ 3,00
 *      200         Hambúrguer Simples      R$ 4,00
 *      300         Cheeseburguer           R$ 5,50
 *      400         Bauru                   R$ 7,50
 *      500         Refrigerante            R$ 3,50
 *      600         Suco                    R$ 2,80
 * 
 * Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e
 * calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será
 *  calculado um item. Use o comando switch. Crie um caso default para produto não existente.* 
 * 
 */


function total_a_pagar(codigo, qtd){


    let preco;

    switch(codigo){
        case 100:
            preco = qtd * 3.00;
            return console.log(`Total Cachorro quente: R$ ${preco.toFixed(2)} `);
            break  
        case 200:
            preco = qtd * 4.00;
            return console.log(`Hamburguer simples: R$ ${preco.toFixed(2)}`);
            break; 
        case 300:
            preco = qtd * 5.50;
            return console.log(`CheeseBurguer: R$ ${preco.toFixed(2)}`);
            break;
        case 400:
            preco = qtd * 7.50;
            return console.log(`Bauru: R$ ${preco.toFixed(2)}`);
            break;
        case 500:
            preco = qtd * 3.50;
            return console.log(`Refrigerante: R$ ${preco.toFixed(2)}`);
            break;
        case 600:
            preco = qtd * 2.80;
            return console.log(`Suco: R$ ${preco.toFixed(2)}`);
            break;
        default:
            return console.log('Produto não existente')       

        
    }
}

//    Código      Descrição do Produto       Preço

//      100         Cachorro Quente         R$ 3,00
//      200         Hambúrguer Simples      R$ 4,00
//      300         Cheeseburguer           R$ 5,50
//      400         Bauru                   R$ 7,50
//      500         Refrigerante            R$ 3,50
//      600         Suco                    R$ 2,80

total_a_pagar(100,3);
total_a_pagar(600,1)