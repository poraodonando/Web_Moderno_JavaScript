//Operador de desestruturação, ele tira da estrutura alguma coisa (uma forma de extrair dos seus objetos uma estrutura)
// novo recurso introduzido no ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const{nome, idade } = pessoa;// as chaves representam o operador destructuring
console.log(nome, idade);

const { nome: n, idade:i} = pessoa;
console.log(n,i);
//Quando nao tem no objeto
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada);

const {endereco: {logradouro, numero, cep}} = pessoa;
console.log(logradouro,numero,cep);

