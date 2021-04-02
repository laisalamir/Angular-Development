//const input = require('fs').readFileSync('/dev/stdin', 'utf8');
//const lines = input.split('\n');

//complete o codigo com suas variaveis
const qtdLinhas  = parseInt(gets()); 
const votosRafael  = parseInt(gets());

let eleito = true;

Array.from({ length:  qtdLinhas }).forEach((_, i) => {
  const votosCandidatos = parseInt(gets());

  if (votosCandidatos > votosRafael) {
   eleito = false;
  }
});

console.log(eleito ? "S" : "N");