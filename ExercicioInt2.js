var rs = require("readline-sync")

var temp = rs.questionInt("Diga uma temperatura ")
var cf = rs.questionInt("Para converter de celsius para farenheit digite 1 e para converter de celsius para farenheit digite 2 ")

if (cf == 1){
    result = (temp * 9/5) + 32
    console.log("A temperatura em farenheit é ",result,"ºF")
}else if (cf ==2){
result = (temp -32) * 5/9
console.log("A temperatura em Celsius é ",result,"ºC")
}else console.log("Valor invalido")
