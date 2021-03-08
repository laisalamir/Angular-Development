function soma(n1, n2) {
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}
//var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));

// variavel dentro da função = var local
// variavel antes da função = var global

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar!</b>";// b = negrito
    //console.log(document.getElementById("agradecimento"));
    //alert("obrigada por clicar!!!");
}

// redirecionamento de pagina
function redirecionar() {
    window.open("https://www.linkedin.com/in/laisa-lamir-b9858215b/");// abre em janela dirente
    // window.location.href = "https://www.linkedin.com/in/laisa-lamir-b9858215b/"; abre na mesma janela
}

function trocar(elemento) {
    //alert("Trocar texto");
    //document.getElementById("mousemove").innerHTML="Obrigada por passar o mouse!";
    //Posso fazer assim:
    elemento.innerHTML = "Obrigada por passar o mouse!";
}
function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina Carregada.")
}
// onload() - quando carregar a pagina ele acha essa função (prioridade)

function funcaoChange(elemento){
    console.log(elemento.value); // para pegar o valor que tem esse elemnto.
}
