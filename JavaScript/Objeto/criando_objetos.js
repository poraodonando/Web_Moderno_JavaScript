//Usando a notação literal

const objeto1 = {}
console.log(objeto1);

// Object em JS

console.log(typeof Object, typeof new Object); //Função Objeto
const objeto2 = new Object;
console.log(objeto2);

//função construtora
function Produto(nome, preco, desconto){
    this.nome = nome;
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desconto);
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 4999.99,0.25)
console.log(p1.getPrecoComDesconto(),"\n",p2)

//Função Factory

function criarFuncionario(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return ((salario/30) * (30 - faltas)).toFixed(2);
        }
    }
}

const f1 = criarFuncionario('Joao', 1200, 5);
const f2 = criarFuncionario('Pedro', 4300, 3);

console.log(f1.getSalario(), f2.getSalario());

// Object.create

const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

//Função famosa que retorna Objeto..
const fromJSON = JSON.parse(`{"info": "Sou um JSON"}`);
console.log(fromJSON.info);




