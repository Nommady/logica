var rs = require("readline-sync")

var num = rs.questionInt("Digite um numero positivo ou negativo: ")

if (num > 0){
    result = num * 2
    console.log("O dobro desse numero é ",result)
}else if (num < 0){
result = num * 3
    console.log("Esse é o triplo do seu numero ",result)
}