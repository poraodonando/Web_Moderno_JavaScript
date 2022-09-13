// Array é um objeto, nao existe array nativo em JS

console.log(typeof Array);
console.log(typeof new Array);
console.log(typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // undefined

aprovados[3] = 'Paulo'; //Serve para substituir
aprovados.push('Joao'); // Serve para colocar novo elemento
console.log(aprovados);

aprovados[9] = 'Rafael';
console.log(aprovados);
console.log(aprovados.length);
aprovados.sort() //ordena o array, altera o array que foi chamado
console.log(aprovados)

delete aprovados[1];
console.log(aprovados);
aprovados.splice(1,1)//serve para adicionar, remover e ou add e remover itens em 
aprovados(1,1, 'Elemento1', 'Elemento2'); //(incice para excluir, quantidade de elementos que se quer excluir, elementos a adicionar, elementos a adicionar)
