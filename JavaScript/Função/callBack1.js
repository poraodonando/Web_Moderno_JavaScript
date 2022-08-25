// Dada uma função ela é chamada quando um evento acontecer

const fabricantes = ['Mercedes','Audi','BMW'];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}  `);
}

fabricantes.forEach(imprimir);

fabricantes.forEach(fabricantes => console.log(fabricantes))

//imprimir(fabricantes);
