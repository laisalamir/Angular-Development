//Funções são objetos que permitem serem chamados.
const arrowFn = ( ) => 'Code here';
const arrowFn = ( ) => {
  //mais de uma expressão
  return 'Code here';
}

//Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//receber parametros

const logValue = value => console.log(value);
const LogFnResult = fnParam => console-çpg(fnParam());

LogFnResult(fn);

// receber e retornar funções
const controlFnExec => fnParam => allowed => {
  if (allowed){
    fnParam
  }
}
const handleFnExecution= controlFnExec(fn);
handleFnExecution(true); // executara a função fn
handleFnExecution(); // não executara a função fn

//controlFnExec como função
function controlFnExec(fnParam){
  return function(allowed){
    if(allowed){
        fnParam
    }
  }
}