 /**
  * Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais
  * de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor 
  * ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as 
  * unidades de medida.
  */

 function crescAnual(alt_a, tax_a, alt_b, tax_b){

   
    if(alt_a == alt_b){

        if(tax_a > tax_b){
            return 'A criança A ultrapassará a criança B em 1 ano.';
        }else if(tax_a < tax_b){
            return 'A criança B ultrapassará a criança A em 1 ano.';
        }else{
            return 'As crianças tem igual altura e crescimento.';
        }

    }else{

        if(alt_a > alt_b){

            if(tax_a >= tax_b){
                return 'A criança menor nao ultrapassará a maior.';
            }else{
                return 'A criança menor nao ultrapassará a maior em $.'
            }
        }



    }
   
   
    // let tam_a = alt_a * tax_a;
    // let tam_b = alt_b * tax_b;
    // let maior,menor, ano = 0;

    //     if(alt_a != alt_b){

    //         if(alt_a > alt_b){
    //             maior = tam_a;
    //             menor = tam_b

    //         }else{
    //             maior = tam_b;
    //             menor = tam_a;
    //         }

    //         for(let i = menor; i <= maior;i++ ){
    //             ano++;
    //         }
    //     }else{
    //         return console.log('Ambos tem a mesma altura');
    //     }

    //     return console.log(`Eles terão tamanho iguais em ${ano} anos`);


 }



 crescAnual(123, 0.2, 165, 0.2);
