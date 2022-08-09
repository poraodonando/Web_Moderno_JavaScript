
function soBoaNoticia(nota){

    if(nota>= 7){
    console.log(`Aprovado com ${nota}` );
    }
}

soBoaNoticia(8.6);
soBoaNoticia(4);

function seForVerdadeEuFalo(valor){

    if(valor){
        console.log("E verdade ..." + valor);
    }

}

seForVerdadeEuFalo(); // undefined
seForVerdadeEuFalo(null);// falso
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo(0);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');// verdadeira
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1,5])
seForVerdadeEuFalo({}); // Objeto


