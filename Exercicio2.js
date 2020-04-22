var rs = require("readline-sync")

var num = rs.questionInt("Digite um numero: ")

var num2 = num % 2

if (num2  == 0) {
    console.log("Par");
}
else console.log("Impar");

