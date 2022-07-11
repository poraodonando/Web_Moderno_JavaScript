//Armazenando uma função em uma variavel


const imprimirSoma = function(b,a){
  console.log(a + b);  
} 
imprimirSoma(2,5);

//Armazenando uma função arrow em uma variável
//Uma forma reduzidade construir uma função

const soma1 = (a, b) =>{
    return a +b;
}
console.log(soma1(5,3));

//Retorno implicito

const soma2 = (a,b) => a + b;
console.log(soma2(2,4));

//Outra forma
const imprimir2 = a => console.log(a);
imprimir2("Legal!!!");

