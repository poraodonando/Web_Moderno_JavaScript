// Hoisting => Içar, Içamento
 // O interpretador pega a variável e joga para cima
 // Hoisting em JavaScript é um comportamento padrão que move as declarações para o topo

 console.log('a =', a); // Undefined
 var a = 2;
 console.log('a = ',a); // a = 2

// Função também sofre içamento

function teste(){
    console.log('a = ', a);
    var a = 2;
    console.log('a = ', a);
}

teste();

// Trabalhando com o LET

console.log('b = ', b);
let b = 2;
console.log('b = ', b);
// Gera um erro!

 