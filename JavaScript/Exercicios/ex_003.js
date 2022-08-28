/**
 * Crie uma função que recebe dois parâmetros, base e expoente, 
 * e retorne a base elevada ao expoente.
 */

function potencia(base, exp){
    
    pot = Math.pow(base,exp);
    res = `${base} elevado a ${exp} = ${pot}`

    return res;
}

const pot_1 = potencia(2,4);
console.log(pot_1);
const pot_2 = potencia(4,6);
console.log(pot_2);
