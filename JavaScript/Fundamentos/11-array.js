// Uma forma de agrupar multiplos valores, a partir de um unico valor em uma estrutura indexada.

// Par de [] representa um array

const valores = [7, 5, 8.5, "OLa", false]; 
console.log(valores[0], valores[3]);
console.log(valores[7]); // udefined 
console.log(valores.length)// calcula o tamanho do array 
valores.push({id: 3},false,null, 'Teste');  //Adiciona novos elementos
console.log(valores);

console.log(valores.pop());// retira e mostra o ultimo valor
delete valores[0]; // retira o elemento selecionado
console.log(valores)

console.log(typeof valores); // Array é do tipo Object 
