let alcohol = 0;
let gasoline = 0;
let diesel = 0;
let i = [];
var cliente = 0;

while (cliente != 4){
    cliente =  parseInt(gets());
    i.push(cliente);
}

while ( i.length>0) {
  const code = Number(i.shift());

  switch (code) {
    case 1:
      alcohol++;
      break;
    case 2:
      gasoline++;
      break;
    case 3:
      diesel++;
      break;
    case 4:
      break;
    default:
        continue;
  }
  
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcohol);
console.log("Gasolina: " + gasoline);
console.log("Diesel: " + diesel);