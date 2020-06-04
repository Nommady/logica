var rs = require("readline-sync")

var prod = rs.questionInt("Qual o valor do produto? ")
var m1 = rs.questionInt("Quantas moedas de R$1,00 vc tem? ")
var m50 = rs.questionInt("Quantas moedas de R$0,50 vc tem? ")
var m25 = rs.questionInt("Quantas moedas de R$0,25 vc tem? ")
var m10 = rs.questionInt("Quantas moedas de R$0,10 vc tem? ")
var m5 = rs.questionInt("Quantas moedas de R$0,05 vc tem? ")
var m01 = rs.questionInt("Quantas moedas de R$0,01 vc tem? ")

var poup = (m1 * 1) + (m50 * 0.5) + (m25 * 0.25) + (m10 * 0.10) + (m5 * 0.5) + (m01 * 0.01)

if (poup >= prod) {
    console.log("Voce pode comprar o produto pois voce tem ",poup)
}else console.log("Voce nao pode comprar o produto pois voce tem ",poup)