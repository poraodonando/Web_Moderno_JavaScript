let isAtivo = false;

console.log(isAtivo);

isAtivo = true; // forma padrão
console.log(isAtivo);
isAtivo = 1;

console.log(!!isAtivo); // transforma um valor em um valor verdadeiro ou falso (nega duas vezes)

console.log('Os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(!!'testo');

console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));


console.log('Pra finalizar...');
console.log(!!(''|| null || 0 || ' '));
console.log((''|| null || 0 || 'epa'));// retorna o unico valor verdadeiro

let nome = '';
console.log(nome || 'Desconhecido'); // Caso nao entre com o nome, o programa vai imprimir 'Desconhecido'


