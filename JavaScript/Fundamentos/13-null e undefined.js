const a = {name: 'Teste'}; // a tem o endereço que aponta para o objeto
console.log(a);

const b = a; 
//a e b Apontam para o mesmo lugar na memoria 
//Igualei o endereço para o mesmo local de memoria (Atribuição por referencia)

console.log(b);

b.name = 'Opa'; 
console.log(a);
console.log(b);

let c = 3;
let d = c;

d++; // Incrementa uma unidade ao valor da variavel d
// Aqui foi uma tribuição por valor
console.log(c);
console.log(d);
