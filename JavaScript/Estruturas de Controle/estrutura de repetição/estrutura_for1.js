let contador = 1;

while(contador <= 10){
    console.log('contador = ' + contador);
    contador++;
}

for(let i = 1;i <= 10; i++ ){
    console.log(`i = ${i}`);
}

const notas = [7.5, 6.4, 5.4, 10.0, 2.4]

for(let i = 0; i <notas.length; i++ ){
    console.log(`Nota em ${i+1} :` +notas[i]);
}