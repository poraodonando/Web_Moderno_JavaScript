//Variaveis definidas com a palavra reservada VAR tem escopo global e escopo de função

var numero = 1;
{
    let numero = 2;
    console.log("Dentro = ", numero);
}

console.log("Fora = ", numero);

//Variaveis definidas com a pslavra  LET tem escopo global, e escopo de bloco


let numero1 = 3;
{
    let numero1 = 4;
    console.log("Dentro = ", numero1);
}

console.log("Fora = ", numero1);