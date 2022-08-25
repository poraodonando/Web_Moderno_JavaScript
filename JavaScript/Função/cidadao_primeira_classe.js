//Função em JS é First-Class Object (Citzens)
//Higher-order function

//Criar função de forma literal

function func1(){

    //O retorno e opcional
};

// Armazenar uma função em uma variável

const func2 = function(){};

//Armazenar dentro de um array

const array = [function(a,b){return a+b}, func1, func2];
console.log(array[0](2,3));

//Armazenar em um atributo de objeto
const obj ={}
obj.falar = function(){return 'opa'};
console.log(obj.falar());

//Passar função como parâmetro

function run(fun){

    fun();
}

run(function(){console.log('Executadando...')});

//Uma função pode retornar/conter uma função

function soma(a,b){
    return function(c){
        console.log(a+b+c);
    }
}

soma(2,3)(4);

const cincoMais = soma(2,6);
cincoMais(3)



