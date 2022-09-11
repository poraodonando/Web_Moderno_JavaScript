function Aula(nome, video){
    this.nome = nome
    this.video = video
}

const aula1 = new Aula('Bem vindo', 123);
const aula2 = new Aula('Até Breve...', 456);
console.log(aula1,'\n',aula2)

//Simulando o new 
function novo(f, ...params){
    const obj1 = {};
    obj1.__proto__ = f.prototype;
    f.apply(obj1,params);
    return obj1;
}
