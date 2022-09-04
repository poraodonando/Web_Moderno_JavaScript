//pessoa -> 123 -> {...}
const pessoa = {
    nome: 'Joao'
}

pessoa.nome ='Pedro',
console.log(pessoa);

// pessoa <- 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa); //Congela anteriormente
pessoa.nome = 'Maria';
pessoa.end = 'RUA ABC';
delete pessoa.nome; 
console.log(pessoa.nome);

// congelando um objeto

const pessoaCongelada = Object.freeze({nome: 'Nando'})
pessoaCongelada.nome = 'carlos';
console.log(pessoaCongelada);