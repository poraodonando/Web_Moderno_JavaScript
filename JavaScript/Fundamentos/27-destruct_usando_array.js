const[a] = [10];
console.log(a);

const[n1, ,n3, n4, n5, n6] = [10, 7, 9, 8];
console.log(n1,n3,n4,n5,n6);

//Desestruturação aninhada
const [, [, nota] ] = [[1,7,8], [4,5,6]];
console.log(nota);
