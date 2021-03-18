function multiply (a, b){
   // b = b || 1;
   //b= typeof b === 'undefined' ? 1 : b;
   if (typeof b === 'undefined'){
       b = 1;
   }
    return a *b;
}
console.log(multiply(5));
//console.log(multiply(5, 0));

/* ******** lazy evaluation */
function randomNumber(){
    return Math.random() * 10;
}
function multiply1(a, b = randomNumber){
    return a *b;
}
console.log(multiply1(5));