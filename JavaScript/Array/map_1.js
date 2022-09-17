//Transforma um Array em outro com o numero iguais de elementos.

const nuns = [1, 2, 3, 4, 5];

// Map : For com propósito

let res = nuns.map(function(e){
    return e * 2;
})
//O map gera um novo array
console.log(res);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

resultado = nuns.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado)