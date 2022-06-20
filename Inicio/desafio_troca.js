 // Desafio da troca instanciar dois valores e trocar seus valores

 let a = 10;
 let b = 20;
 let aux;

 aux = a;
 a = b;
 b = aux;  

// ou [a,b] = [b,a]

 console.log("O novo valor de A: " + a);
 console.log("O novo valor de B: " + b);