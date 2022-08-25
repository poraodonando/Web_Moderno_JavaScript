//Estrategia para gerar valores padrão

//Estrategia 1:

function soma1(a, b, c){
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c; 
}

console.log('Estrategia 1');
console.log(soma1());
console.log(soma1(5));
console.log(soma1(1,2,3));
console.log(soma1(0,0,0));



//Estrategia 2, 3 e 4

function soma2(a, b, c){
    a = a !== undefined ? a : 1; // Estrategia 2
    b = 1 in arguments ? b : 1; //Estategia 3 
    c = isNaN(c) ? 1 : c; //Estategia 4 (Mais segura)

    return a + b + c;
}

console.log('Estrategia 2, 3 e 4');

console.log(soma2());
console.log(soma2(3));
console.log(soma2(1,2,3));
console.log(soma2(0,0,0));

//Valor padrão do ES2015
//Menor e mais adequada
function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log('Estrategia ES')
console.log(soma2());
console.log(soma2(3));
console.log(soma2(1,2,3));
console.log(soma2(0,0,0));
