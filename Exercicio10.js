var rs = require("readline-sync")

var num = rs.questionInt("Digite um numero! ")

if (num >= 100 && num >= 200){
    console.log("Seu numero esta entre 100 e 200")
}else console.log("Seu numero nao esta entre 100 e 200")