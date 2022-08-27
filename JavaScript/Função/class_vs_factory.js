class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
        //this. acessa o nome do objeto
    }
}

const pessoa1 = new Pessoa('Fernando')
pessoa1.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const pessoa2 = criarPessoa('Joao');
pessoa2.falar();



