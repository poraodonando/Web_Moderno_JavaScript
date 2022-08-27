function criarProduto(nome, preco){
    
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 4999.32));
console.log(criarProduto('HD', 559.99));