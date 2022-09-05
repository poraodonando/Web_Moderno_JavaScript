const pessoa = {
    nome: 'Ricardo',
    idade: 3,
    peso: 15 
}

console.log(Object.keys(pessoa)); //pega todas as chaves
console.log(Object.values(pessoa));// pega todos os valores
console.log(Object.entries(pessoa)); //Retorna um array com todos os sub Arrays composto que tem dois elementos.

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
}) //outra forma
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNasc',{
    enumerable: true,
    writatable: false,
    value: '01/01/2022' 
}); //pode definir algumas caracteristicas de uma propriedade


