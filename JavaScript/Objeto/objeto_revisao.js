//Objeto -> Coleção dinâmica de pares chave: valor.

const produto = new Object 
produto.nome = 'Cadeira'; //Notação ponto
produto['Marca do produto'] = 'Genérica'; //Notação string
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['Marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A7',
    valor: 72000,
    proprietario: {
        nome: 'Fernnado',
        idade: 33,
        endereco: {
            logradouro: 'Rua Wally Vollman',
            numero: 310
        }
    },
    condutores: [
        {
        nome: 'Junior',
        idade: 21
        },
        {nome: 'Leon',
        idade: 19
        },
        {
        nome:'Ana',
        idade: 35        
        },
    
    ],
    calculaSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Ap Vila Germânca';
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calculaSeguro,
console.log(carro)
