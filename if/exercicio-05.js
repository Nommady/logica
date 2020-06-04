var rs = require("readline-sync")

var num1 = rs.questionInt("Diga um numero: ")
var num2 = rs.questionInt("Diga outro numero: ")
var num3 = rs.questionInt("Diga mais um numero: ")

if (num1 > num2 && num2 > num3) {
    console.log("A sequencia correta é ", num3, num2, num1)
} else if (num1 > num3 && num3 > num2) {
    console.log("A sequencia correta é ", num2, num3, num1)
} else if (num2 > num1 && num1 > num3) {
    console.log("A sequencia correta é ", num3, num1, num2)
} else if (num2 > num3 && num3 > num1) {
    console.log("A sequencia correta é ", num1, num3, num2)
} else if (num3 > num2 && num2 > num1) {
    console.log("A sequencia correta é ", num1, num2, num3)
} else { console.log("A sequencia correta é ", num2, num1, num3) }
