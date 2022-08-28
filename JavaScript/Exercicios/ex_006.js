/**
 * Elabore duas funções que recebem três parâmetros: capital inicial, 
 * taxa de juros e tempo de aplicação. A primeira função retornará 
 * o montante da aplicação financeira sob o regime de juros simples 
 * e a segunda retornará o valor da aplicação sob o regime de juros compostos.
 */

function jurosSimples(cap_inicial, taxa, tempo){
    let montante = cap_inicial + cap_inicial * taxa * tempo;

    console.log(`Juros Simples: ${montante}`);
}

function jurosCompostos(cap_inicial, taxa, tempo){
    let montante = cap_inicial * Math.pow((1 + taxa) , tempo);

    console.log(`Juros Compostos: ${montante.toFixed(2)}`);
}


jurosSimples(1000, 0.3, 12);
jurosCompostos(1000, 0.3, 12);