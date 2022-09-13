const pilotos = ['Vetel', 'Alonso', 'Massa', 'Sena'];
pilotos.pop(); // Sena quebrou o carro! (tira o ultimo)
console.log(pilotos);
pilotos.push('Verstappens') // Adiciona na ulima posição
pilotos.shift() // Remove o primeiro da posição
console.log(pilotos)
pilotos.unshift("Hamilton")// Adiciona no inicio
console.log(pilotos);
//Splice pode adicionar ou remover

pilotos.splice(2,0, 'Bottas', 'Massa');
console.log(pilotos)
//Remover elementos
pilotos.splice(3,1);
console.log(pilotos);

const maisPilotos1 = pilotos.slice(2) // Cria um novo array
console.log(maisPilotos1);
const maisPilotos2 = pilotos.slice(1,4);
console.log(maisPilotos2)