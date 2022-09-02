/**
 * Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
 * A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…)
 * que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é
 * cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago
 * para o respectivo mês escolhido.
 */

function anuidade(mes, mens){
    
    /**
     * M = C * (1 + i)**t
     */

    let taxa = 0.5, mont;

    switch(mes){
        case 1:
            mont = mens * (1 + taxa)**mes;
            return console.log(`Montante a ser pago R$ ${mont.toFixed(2)}`);
            break;            
        case 2:
            mont = mens * (1 + taxa)**mes;
            return console.log(`Montante a ser pago R$ ${mont.toFixed(2)}`);
            break;
        case 3:
            mont = mens * (1 + taxa)**mes;
            return console.log(`Montante a ser pago R$ ${mont.toFixed(2)}`);
            break;  
        case 4:
            mont = mens * (1 + taxa)**mes;
            return console.log(`Montante a ser pago R$ ${mont.toFixed(2)}`);
            break;  
        case 5:
            mont = mens * (1 + taxa)**mes;
            return console.log(`Montante a ser pago R$ ${mont.toFixed(2)}`);
            break;  
        case 6:
            mont = mens * (1 + taxa)**mes;
            return console.log(`Montante a ser pago R$ ${mont.toFixed(2)}`);
            break;  
        case 7:
            mont = mens * (1 + taxa)**mes;
            return console.log(`Montante a ser pago R$ ${mont.toFixed(2)}`);
            break;  
        case 8:
            mont = mens * (1 + taxa)**mes;
            return console.log(`Montante a ser pago R$ ${mont.toFixed(2)}`);
            break;
        case 9:
            mont = mens * (1 + taxa)**mes;
            return console.log(`Montante a ser pago R$ ${mont.toFixed(2)}`);
            break;  
        case 10:
            mont = mens * (1 + taxa)**mes;
            return console.log(`Montante a ser pago R$ ${mont.toFixed(2)}`);
            break;  
        case 11:
            mont = mens * (1 + taxa)**mes;
            return console.log(`Montante a ser pago R$ ${mont.toFixed(2)}`);
            break;  
        case 12:
            mont = mens * (1 + taxa)**mes;
            return console.log(`Montante a ser pago R$ ${mont.toFixed(2)}`);
            break;  


    }

}
anuidade(5,400);
anuidade(3,400);
anuidade(12,400);