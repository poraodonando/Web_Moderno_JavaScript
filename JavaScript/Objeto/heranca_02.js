Object.prototype.atrib0 ='0';
const avo = {
    atrib1: 'A'
}

const pai = {
    __proto__: avo,
    atrib2: 'B'
}

const filho = {
    __proto__: pai,
    atrib3: 'C'
}
console.log(filho.atrib0);
console.log(filho.atrib1);
console.log(filho.atrib2);
console.log(filho.atrib3);

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta;
        }else{
            this.velAtual = this.velMax;
        }

    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}


const ferrari = {
    modelo: 'F40',
    velMax:324 //Shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro);
Object.setPrototypeOf(volvo,carro);

console.log(ferrari);
console.log(volvo);

volvo.aceleraMais(100)