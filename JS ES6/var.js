/*Tipos e variáveis
string                  symbol
number                  object  
boolear               function
null                    array
undefined */

//Retorna o tamanho de uma string
const textSize = 'Laisa'. length;
console.log(`Quantidade de letras: ${textSize}`);

//Retorna um array quebrado a string por um delimitador
const splittedText = 'Laisa'.split('i');
console.log(`\nArray com posições separadas pelo delimitador:`, splittedText);

//Busca por um valor e substitui por outro
const replacedText = 'Laisa'.replace('Laisa', 'asiaL');
console.log(`\nSubstituição de valor:`, replacedText);

//Retorna a "fatia " de um valor
const lastChar = 'Laisa'.slice(-1);
console.log(`\nUltima letra de uma string:`, lastChar);

const allWithoutLastChar ='Laisa'.slice(0,-1);
console.log(`\nValor da string da primeira letra menos a ultima`, allWithoutLastChar);

const secondToEnd='Laisa'.slice(1);
console.log(`\nValor da string da segunda letra ate a ultima:`, secondToEnd);

//Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Laisa'.substr(0, 2);
console.log(`\nAs duas letras primeiras letras sao:`. twoCharsBeforeFirstPos);
