var rs = require("readline-sync")

var texto = rs.question("Digite um texto aqui: ")
var fl = texto.substring(0,1)

if ( fl == fl.toUpperCase()){
    console.log("O primeiro caractere é Maiusculo")
}else console.log("O pimeiro caractre é minusculo")