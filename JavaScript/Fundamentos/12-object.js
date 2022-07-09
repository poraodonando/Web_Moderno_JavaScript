const prod1 = {}; // Par de {} representa um objeto

prod1.nome = 'Celular ultra mega'; // objeto é uma coleção de pares chave: valor

prod1.preco = 498.5;

prod1['Desconto legal'] = 0.4; //  outra forma de colocar um par chave: valor,  Evitar atributos com espaço(nao é legal usar com espaço).

console.log(prod1);

const prod2 ={
    nome: 'Camisa polo',
    preco: 79.90,
    obj:{
        blabla: 1,
        obj:{
            blablabla: 2
        }
    }
}

console.log(prod2);

//Escevendo em JSON
//JASON é um formato textual de um objeto
//Serve para comunicação entre sistemas, troca dados etre sistemas
'{"nome": "Camisa Polo", preco: 79.90}'
