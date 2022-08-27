// é uma função que retorna um objeto

const prod1 = {
    nome: '...',
    preco: 32.4 
}

const prod2 = {
    nome: '...' ,
    preco: 54
}

function criarPessoa(){
    return{
        nome: 'Fernando',
        sobrenome: 'Batista'
    }
}
console.log(criarPessoa());