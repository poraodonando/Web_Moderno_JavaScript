function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min;

    return Math.floor(valor);
}

const obj = {max:50, min: 40}
console.log(rand(obj))

// outra possibilidade

console.log(rand({min:995}))

// pode passar um objeo vazio
console.log(rand({}));

//passar valor vazio
//console.log(rand())// da ERRO!

