const escola= "Cod3r";

console.log(escola.charAt(3)); // MOstra o valor do indice indicado
console.log(escola.charAt(7)); // Nao vai gerar eveitos colaterais
console.log(escola.charCodeAt(3)); // Retorna o valor na tabela Code (ASCII)
console.log(escola.indexOf('r'));//retorna o valor do indicie que está a letra
 console.log(escola.substring(1)); // Escrever a partir do indice indicado
 console.log(escola.substring(0,3)); // Ele vai do indice 0 até o indice 3, EXCLUINDO O VALOR DO INDICE 3
 console.log('Escola '.concat(escola).concat("!"))// função de concatenar strings
console.log(escola.replace(3,'W'));// substitui um em outro
console.log(escola.replace(/\o/,'0')); //Substitua todos os caracteres (o) por 0
console.log('Ana, Maria, Pedro'.split(','));
//Converter uma string por um array, passando na split o que voce quer considerar como um separador

