var rs = require("readline-sync")

var macas = rs.questionInt("Quantas macas voce ira comprar?")

if (macas <= 11) {
    var valor = macas * 0.30
    console.log("Sua compra deu R$",valor)
}else{
    var valor = macas * 0.25
    console.log("Sua compra deu R$",valor)
}