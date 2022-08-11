const notas = [5.4, 6.4, 9.7, 7.4, 2.4, 6.5]

for(let i in notas){ // For in acessa o indice do elemento 
    console.log(`${i} = ${notas[i]}`);
}

const pessoa = {
    nome: 'Nando', 
    sobrenome: 'Batista',
    idade: 33,
    peso: 51.2
}

for(let atributo in pessoa){
    console.log(`${atributo}: ${pessoa[atributo]}`)
}