/**
 * Crie uma função que irá receber dois valores, 
 * o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores.
 */

function resto( dividendo,  divisor){
    
    divisao = dividendo / divisor;
    restoDiv = dividendo % divisor;

    

    resutado = `Divisão: ${divisao} \nResto da divisao: ${restoDiv}\n---------------`

    return resutado;
}

console.log(resto(4,2))
console.log(resto(4,5))

