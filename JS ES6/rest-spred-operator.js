// ANTES
function sum(a, b){
    var value = 0;
    for(var i=0;i < arguments.length; i++){
        value += arguments[i];
    }
    //return a +b;
    return value;
}
console.log(sum(5,5,5,2,3));

// ES6
// rest operator ...
// rest vai pegar o restante dos argumentos
function sum2(...args){
    // reduce => somar
    //console.log(args);
    //console.log(arguments);
    return args.reduce((acc, value)=> acc + value,0);
}
console.log(sum2(5,5,5,2,3));

const sum3 = (a, b, ... rest)=> {
    console.log(a, b, ...rest);
};
console.log(sum3(5,5,5,2,3));

// spread  operator ...
const multiply =(...args) => args.reduce((acc, value)=> acc * value, 1);

const sum4 = (...rest)=> {
    return multiply(...rest);
};
console.log(sum4(5,5,5,2,3));
/******************** */
// quebrar os itens e repassar para algum lugar (spread operator)
// string, arrays, literal objects e objetos iteraveis

const str = 'Digital Innovation One';

function logArgs(...args){
    console.log(args);
}
logArgs(...str);

const arr = [1,2,3,4];
function logArgs(){
    console.log(arguments);
}
logArgs(...arr);


function logArgs1(a,b,c){
    console.log(a,b,c);
}
const arrClone = [...arr];
const obj ={
    test:123
};
const obj2={
    ...obj,
    test2:'Hello'
}
const objMerged={
    ...obj,
    ...obj2,
};
console.log(objMerged);

