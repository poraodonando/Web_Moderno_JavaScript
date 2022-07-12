// Acessa membros de uma função, membros de um obejto a partir da notação ponto.
// Usa ponto para acessar atributos seja a partir e uma função, seja a partir da notação literal, seja usando a partir usando um objeto  da propria API do JavaScript
console.log(typeof console); // Object
console.log(Math.ceil(6.1));

const obj1 = {}
obj1.nome = 'Bola';
// outra forma de instaciar um objeto:
//obj1['nome'] = 'Bola2'; 

console.log(obj1.nome);

function Obj(nome){
    this.nome = nome; // nome associado ao objeto que for criado a partir dessa função
    this.exec = function(){
        console.log('Exec...');
    }

}

const Obj2 = new Obj('Cadeira');
const Obj3 = new Obj('Mesa');

console.log(Obj2.nome);
console.log(Obj3.nome);
Obj3.exec();


