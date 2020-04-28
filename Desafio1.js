var rs = require("readline-sync")

var frase = rs.question("digite um texto: ")
var textSplit = frase.split(" ")
var tamInicial = 0;
var longest;

//Achar a maior palavra
for (var i=0; i <textSplit.length; i++){
    if(textSplit[i].length > tamInicial){
        tamInicial = textSplit[i].length;
        longest = textSplit[i]
    }
}
//montar borda superior
var count = longest.length + 4 //adicionando 4 espaços para padronizar a maior string
var estrela = "*".repeat(count)//fazendo a primeira moldura com repeat

//Montar palavras por linha
var espaco;
var dist = " ";
console.log(estrela)
for (var i = 0; i < textSplit.length; i++){
    espaco = (count-1) - (textSplit[i].length +2);//verificando espaco entre palvra e borda esquerda
    var linha = ("*" + textSplit[i] + dist.repeat(espaco) + "*")
    console.log(linha)
}
//borda inferior
console.log(estrela)


