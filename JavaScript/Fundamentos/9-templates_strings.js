const nome = 'Rebeca';
const concatenacao = 'Ola ' + 
nome + ' !';// Nao se pode quebrar linhas de strings

const template = `
Ola 
    ${nome} 
            !`


// Back tick = > sinal de crase
// Ele suporta e considera quebras de linhas

//Expressoes

console.log(`1 + 1 = ${1+1}`);

console.log(concatenacao);
console.log(template);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')} !`);