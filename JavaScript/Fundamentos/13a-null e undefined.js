let valor // nao inicializada (por padrão é undefined)

console.log(valor);
 
valor = null; //ela nao esta apontando para nenhum endereço de memoria (ausencia de valor) 
console.log(valor);
//console.log(valor.toString()); //Erro!
const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // deixa pra linguagem atribuir undefined (evite atribuir undefined)

console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null // Sem preço
console.log(!!produto.preco);
console.log(produto)


