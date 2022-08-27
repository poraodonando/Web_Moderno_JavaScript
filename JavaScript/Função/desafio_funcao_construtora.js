/**
 * class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
        //this. acessa o nome do objeto
    }
}
 */

function Pessoa(nome){
    this.nome = nome;

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`);
    } 
}

const p1 = new Pessoa('Leon');
p1.falar();

