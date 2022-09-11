//Object.preventExtensions
//Pode até excluir atributos, mas nao adicionar

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})

console.log('Extensivel: ', Object.isExtensible(produto));
produto.nome = 'Borracha'; //OK
produto.descricao = 'Borracha escolar Branca'; //NAo vai surtir efeito
delete produto.tag; //OK
console.log(produto);

//Object.seal (selar) -> 
/*
Nao adiciona novos atributos, 
nao exclui novos atributos
Consegue modificar os que já existem
*/


const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));
pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

//Object.freeze = selar + valores constantes