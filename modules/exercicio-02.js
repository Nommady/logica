const FasamImc = require('fasam-imc-calc');
var rs = require("readline-sync")

var peso = rs.questionFloat("Diga seu peso: ")
var altura = rs.questionFloat("Diga sua altura: ")
var imc = new FasamImc()
var resultado = imc.calc(peso, altura)
console.log("Seu imc é " + resultado)