// VAR em LOOP 2
var funcs =[]// Array vazio

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]();
funcs[8]();

//LET em LOOP 2

const funcs2 = [];

for(let r = 0; r < 10; r++){
    funcs2.push(function(){
        console.log(i);
    })
}

funcs2[2]();
funcs2[8]();