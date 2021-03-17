var n = parseInt(gets());

while ( n > 0) { //complete o codigo
  var c = parseFloat(gets());
  let dias = 0; //atribua o valor correto a variavel
  while ( c > 1 ) { // complete o while
    // complete o codigo
    c = c / 2;
    dias++;
  }
  console.log(dias +" dias"); //complete o código para a saída
  n--;
}