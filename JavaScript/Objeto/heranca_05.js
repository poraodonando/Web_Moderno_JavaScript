console.log(typeof String); //Function
console.log(typeof Array);  //Function
console.log(typeof Object); //Function

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function(){
    return this[0];
}
console.log([1, 2, 3, 4, 5].first());
console.log(['a', 'b', 'c', 'd'].first());

String.prototype.toString = function(){
    return 'Lascou TUdo!';
}

console.log('Escola Cod3r'.reverse());


