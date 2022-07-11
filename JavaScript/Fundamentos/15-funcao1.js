// Função sem retorno
function imprimirSoma(a, b){
    console.log(a+b);    
}

imprimirSoma(4,9);
imprimirSoma(2) // O segundo valor será undefined
imprimirSoma(3,9,8,2,7,3)//A função somente pega os dois primeiros e o restante ele ignora
imprimirSoma()// NaN



//Função com retorno

function soma(a, b = 0){
    return a + b;
}

soma(2,5);
console.log(soma(2,7));
console.log(soma(5));

