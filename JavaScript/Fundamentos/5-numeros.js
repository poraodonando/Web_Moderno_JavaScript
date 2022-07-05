const peso_1 = 1.0;
const peso_2 = Number('2.0');
const peso_3 = Number('2.1');

console.log(peso_1, peso_2);
console.log(Number.isInteger(peso_1)); // True (E uma função)
console.log(Number.isInteger(peso_2)); // True
console.log(Number.isInteger(peso_3)); // False

const avaliacao_1 = 9.871;
const avaliacao_2 = 6.834;

const total = avaliacao_1 * peso_1 + avaliacao_2 * peso_2;

const media = total / (peso_1 + peso_2);
console.log(media);
console.log(media.toFixed(2)); // Mostra a quantidade de casas decimais que se quer imprimir

// Converter numeros em Strings

console.log(media.toString());
console.log(media.toString(2));// Converte o numeral decimal em binario

console.log(typeof media);