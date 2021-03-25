//Symbols e Iterators
//Simbols é uma maneira de gerar um identificador unico.

const uniqueId= Symbol('Helooo');
//const uniqueId2= Symbol('Helooo');

//console.log(uniqueId);

//console.log(uniqueId === uniqueId2);

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);

//well known simbol

//iterator - split - topPrimitive - asyncIterator

Symbol.iterator // para adicionar propriedades
Symbol.split // para adicionar propriedades
Symbol.toStringTag // para adicionar propriedades

const arr =[1,2,3,4]
const str = 'Digital Innovation One';
const it = arr[Symbol.iterator]();
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());
//console.log(it.next());

while(true){
    let {value, done} = it.next();

    if(done){
        break;
    }
    console.log(value);
}
console.log('\n');
for (let value of str){
    console.log(value);
}// interador- interface para construir passo a passo uma estrutura de dados.
/************* */
console.log('\n');
const obj1= {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
      let i = 0;
      
      return {
          next: () => {
              i++;

              return{
                  value: this.values[ i-1],
                  done: i> this.values.length
              };
          }
      };
    }
};
// generators são funçoes com pausas

function* hello(){
    console.log('Hello');
    yield;
    console.log('form');;
    yield;
    console.log('Function');
}

const it1 = hello();
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
/**************** */
console.log('\n');
const obj3 ={
    values:[1, 2, 3, 4],
    *[Symbol.iterator](){
        for(var i=0; i < this.values.length; i++ ){
            yield this.values[i];
        }
    }
};

for (let value of obj3) {
    console.log(value)
}

// generators para construir interadores
