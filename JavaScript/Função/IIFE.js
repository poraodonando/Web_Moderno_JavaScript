//Função de expressão altamente invocada
//Foge do escopo global

//Escopo local
(function(){
  console.log('Será executado na hora');
  console.log('Foge do escopo mais abrangente');
})()

//Escopo global
console.log('Será executado na hora');
console.log('Foge do escopo mais abrangente');