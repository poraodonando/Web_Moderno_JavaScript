const a = 1;
const b = 2;
const c = 3;

const objeto1 = {a:a, b:b, c:c}
const objeto2 = {a, b, c}
console.log(objeto1, objeto2);

const nomeAtrib = 'nota';
const valorAtrib = 7.87;

const objeto3 = {}
objeto3[nomeAtrib] = valorAtrib
console.log(objeto3);

const objeto4 = {[nomeAtrib]: valorAtrib}
console.log(objeto4);
const objeto5 = {
    funcao1: function() {
        // ...
    },
    funcao2(){
        // ...
    }
}

console.log(objeto5);