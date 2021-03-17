/*
O que vc precisa entender nesses códigos é o seguinte:
o comando gets() serve pra receber (input ou entrada) dados
o comando shift() serve para escolher e remover o primeiro elemento de um array, ex: Nese trecho do cod.
 const code = Number(lines.shift());
 a constante code recebe o primeiro elemento da lista 'lines', e na sequencia automaticamente esse item é excluido da lista*/

 //continue a solução

let alcohol = 0;
let gasoline = 0;
let diesel = 0;
let combustivel =0;
let linha = [];

while (combustivel != 4){
    combustivel = parseInt(gets());
    linha.push(combustivel);
}
while (linha.length>0){
    const code = Number(linha.shift());

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