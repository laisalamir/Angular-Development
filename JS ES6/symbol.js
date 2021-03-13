const symbol1 = symbol();
const symbol2 = symbol();

//Symbols são unicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

// Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
  [nameSymbol1]: 'Laisa',
  [nameSymbol1]: 'Outro nome',
  lastName:'Santana Lamir'
}

console.log(user);

//Symbols criam propriedades que não são enumerables
for(const key in user){
  if(user.hasOwnProperty(key)){
    console.log(`\nValor da chave ${key}: ${user[key]}`);
  }
}

console.log('Propriedade do objeto user:', Object.keys(user));
console.log('Valores das propriedades do objeto user:', Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados nos user:', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user', Reflect.ownKeys(user));

//criar um enum
const direction ={
  UP : symbol( 'up ' ),
  DOWN : symbol( 'DOWN '),
  LEFT: symbol( 'LEFT' ),
  RIGHT: symbol( 'RIGHT' )
}; 

}

