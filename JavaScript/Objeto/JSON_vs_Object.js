const obj1 = {
    a:1,
    b:2,
    c:3,
    soma(){
        return a + b + c;
    }
}
console.log(JSON.stringify(obj1)) //Retorna um texto

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))

//console.log(JSON.parse("{'a':1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{"a":1, "b":2, "c": 3}'))
console.log(JSON.parse('{"a": -1.3, "string": "b", "c": true, "d":{}, "e":[]}'))
//Colocar todos os atributos delimitados por aspas duplas
