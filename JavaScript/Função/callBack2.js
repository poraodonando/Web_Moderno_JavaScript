const notas = [7.7, 5.3, 8.9, 6.2, 3.5, 2.8, 9.3]

//Sem CallBack

const notasBaixas1 = []
for(let i in notas){
    
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1);

//Com CallBack
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7;
})

console.log(notasBaixas2)

//Com Arrow
const notasBaixas3 = notas.filter(notas => notas <7)
console.log(notasBaixas3);



