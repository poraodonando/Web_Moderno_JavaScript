//par Nome:Valor
const saudacao = 'Opa'; // Contexto léxico => O local onde a variavel foi definida fisicamente no código
function exec(){
    const saudacao = 'Faaala...'; // contexto lexico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nomes(chaves)/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: ' Rua muito legal',
        numero: 123,
        nome: 'Astrogildo'
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);