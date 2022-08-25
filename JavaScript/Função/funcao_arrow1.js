
let dobro = function(a){
    return 2 * a;
}

//Função Arrow e smpre anônima, por isso sempre tem que armazená-la em uma variável ou constante

dobro = (a) => {
    return 2 * a
}

 // Uma forma mais reduzida

 dobro = a => 2 * a; //O return está implicito

 console.log(dobro(Math.PI));

 let ola = function(){
    return 'Ola';
 }

 //Arrow function

 ola = () => 'Olá!';
 //OU
 ola = _ => 'Olá!'; // Ignora o parâmetro

 console.log(ola());




