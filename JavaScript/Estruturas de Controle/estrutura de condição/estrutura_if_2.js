function teste1(num){
    if(num > 7)
        console.log(num) // esta associada ao bloco IF
        console.log('Final')// Sempre será executada
    
}


//teste1(8);
//teste1(6);

function teste2(num){
    if(num > 7);{ // cuidado com o ; -> nao usar nas estruturas de controle
        console.log(num);
    }
}

teste2(5)