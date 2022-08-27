function Carro(velMax = 200, delta = 5) {
    //Atributo privado -> pertence apenas ao escopo da função
    let velAtual = 0;
    
    //Metodo Público
    this.acelerar = function(){
        
        if(velAtual + delta <= velMax){
            velAtual += delta;
        }else{
            velAtual = velMax;
        }
    }
    /**
     * Para uma função privada
     * const (ou let) getVelAtual = function(){
     *      return velAtual;
     * }
     * this.getVelAtual deixa o método público
     * 
     */

    //Método Público
    this.getVelAtual = function(){
        return velAtual;
    }

}

const uno = new Carro;
uno.acelerar();

console.log(uno.getVelAtual())

const ferrari = new Carro(350,20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();

console.log(ferrari.getVelAtual())
console.log(typeof Carro);
console.log(typeof ferrari);
