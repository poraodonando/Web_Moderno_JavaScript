/**
 * Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
 * registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
 * mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
 * pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
 * vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
 * jogo. (Número do pior jogo).
 * 
 * Obs.: O primeiro jogo não conta como novo recorde do melhor.
 * Exemplo: String: “10 20 20 8 25 3 0 30 1”
 * Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação
 * e a pior pontuação aconteceu no sétimo jogo.)
 */

 let score = [];
 let qtd = 0;
 let  maior = 0 ;
 let menor = 1;
 let pior;
    function guardaPontos(pontos){
            score.push(pontos);

            for(let i = 0; i < score.length; i++ ){
                    
                if(score[i]> maior ){
                    maior = score[i];
                    qtd ++;
                } else if(score[i] < menor){
                    menor = score[i];
                    pior = i+1;
                }
                
            }

            for(let i = 0; i < score.length; i++){
                if(score[i] == maior){
                    qtd++;
                }
            }

            return console.log(score, maior, qtd) ;
    }




guardaPontos(3);
guardaPontos(3);
guardaPontos(6);
guardaPontos(6);
guardaPontos(6);
