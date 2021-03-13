const user = {
  name :'Laisa',
  lastName:'Santana Lamir'
}
 //Recuperar as chaves do objetvo
 console.log('Propriedades do Objeto user:', Object.keys(user));

 //recupera os valores das chaves do objecto
 console.log(`\nValores das propriedades do objeto user:`, Object.values(user));

 //Retorna um array de arrays contendo [nome_prop, valor_prop]
 console.log(`\nLista de propriedades e valores:`, Object.entries(user));

 //Mergear propriedades de objetos
 Object.assign(user, {fullName: 'Laisa Santana Lamir'});

 console.log(`\nAdiciona a propriedade fullName no objeto user`, user);
 console.log(`\nRetorna um novo objeto mergeado dois ou mais objetos`, Object.assign({}, user, {age: 29}));

 //Previne todas as alterações em um objeto

 const newObj = {foo: 'Bar'};
 Object.freeze(newObj);