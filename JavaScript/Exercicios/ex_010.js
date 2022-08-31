/**
 * Crie uma função que verifica se um número inteiro passado como 
 * parêmetro é divisível por 3  e retorne true ou false.
 * 
 */



function divisívelPor3(num){

    if(num % 3 == 0){
            return console.log(true); 
    }else{
            return console.log(false);
    }


}


divisívelPor3(3);
divisívelPor3(4);