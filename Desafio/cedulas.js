var notasInseridas = parseInt(gets());

var atual = notasInseridas;

var notas100 = parseInt( atual / 100 );
atual -= notas100 * 100;

var notas50 = parseInt( atual / 50 );
atual -= notas50 * 50;

var notas20 = parseInt( atual / 20 );
atual -= notas20 * 20;

var notas10 = parseInt( atual / 10 );
atual -= notas10 * 10;

var notas5 = parseInt( atual / 5 );
atual -= notas5 * 5;

var notas2 = parseInt( atual / 2 );
atual -= notas2 * 2;

var notas1 = parseInt( atual );

/* Print */
console.log( notasInseridas );
console.log( notas100 + " nota(s) de R$ 100,00" );
console.log( notas50 + " nota(s) de R$ 50,00" );
console.log( notas20 + " nota(s) de R$ 20,00" );
console.log( notas10 + " nota(s) de R$ 10,00" );
console.log( notas5 + " nota(s) de R$ 5,00" );
console.log( notas2 + " nota(s) de R$ 2,00" );
console.log( notas1 + " nota(s) de R$ 1,00" );