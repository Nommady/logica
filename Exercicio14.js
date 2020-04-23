var rs = require("readline-sync")

var num1 = rs.questionInt("Diga um numero: ")
var num2 = rs.questionInt("Diga mais um numero: ")
var num3 = num1 % num2

if (num3 == 0) {
    console.log(" É divisivel")
} else console.log("Não é divisivel")
