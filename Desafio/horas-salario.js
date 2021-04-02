/* Variaveis */
var notasInseridas = 546;
var atual = notasInseridas;

var notas100 = parseInt( atual / 100 );
atual -= notas100 * 100;

var notas50 = parseInt( atual / 50 );
atual -= notas50 * 50;

var notas20 = parseInt( atual / 20 );
atual -= notas20 * 20;

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());
let salary = parseFloat(valor1 * 22).toFixed(2); // Digite aqui o calculo do salário
console.log("NUMBER = " + valor1);
console.log("SALARY = U$ " + salary);