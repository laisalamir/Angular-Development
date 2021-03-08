var nome = "Laisa Lamir";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo " + nome);
//alert(nome + " tem " + idade + " anos.");
alert(idade + idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil"));
// replace() é para trocar uma informação.
alert(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());// coloca a letra em caixa alta
console.log(frase.toLowerCase());// coloca a letra em caixa baixa.
var n1 = 5;
var n2 = 3
console.log(n1*n3);

// arrays []

var lista = ["maça","pera","laranja"];
lista.push("uva");//adicionar elemento a lista
lista.pop();// elimina elememto da lista
console.log(lista);
console.log(lista[1]); // posição 1
console.log(lista.length); // tamanho da lista
console.log(lista.reverse());// Tras os elementos em ordem contraria.
console.log(lista.toString()); // perde a referencia de array e imprime como string.
console.log(lista.join(" - "));// Tmabém coloca como string e você pode alterar o elemento.

// Dicionario{}
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);

//lista de dicionários [{}]
var frutas = [{nome: "maça", cor: "vermelha"},{nome: "uva", cor: "roxa"}]
console.log(frutas);
console.log(frutas[0].nome);
alert(frutas[1].cor);

// Condicionais, laços de repetição e Date
// IF/ELSE
var age = prompt("Qual sua idade? ");
//var age = 18;
if (age >= 18){
    alert("Maior de Idade!");
}else {
    alert("Menor de Idade");
};

//while

var count = 5;
while (count < 5){
    console.log(count);
    count = count +1;
};

// for
 var conta;
 for (conta =0; conta <= 5; conta++){
     alert(conta);
 };

 // Como trabalhar com Data no JS
 var d = new Date();
 alert(d);
 alert(d.getMonth()+1);
 alert(d.getMinutes());
 alert(d.getDay());
 alert(d.getHours());




