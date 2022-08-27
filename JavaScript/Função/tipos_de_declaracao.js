// function declaration 

console.log(soma(3,4)); // funciona
console.log(sub(3, 4)); // NAO funciona (so e chamada depois da declaração)
console.log(mult(3,4)); //NAO funciona (so e chamada depois da declaração)

function soma(x, y){
    return x + y;
}
 
// function expression

const sub = function (x, y){
    return x - y;
}

// named funtion expression

const mult = function mult(x, y){
    return  x*y;
}