/**
 *  Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte
 *  quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado,
 *  ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas 
 *  informações.
 */

function entre10e20(vetor){

    let dentro = 0, fora = 0;
        
    for(let i = 0; i < vetor.length; i++ ){

        if(vetor[i] >= 10 && vetor[i] <= 20){
                dentro++;
        }else{
            fora++;
        }

    }


    return console.log(`Entre 10 e 20: ${dentro} \nfora do intervalo: ${fora}`)

}


let vet1 = [1,6,70,32,4,2,60,15,12,5,19]
entre10e20(vet1);