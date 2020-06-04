var rs = require("readline-sync")

var nota1 = rs.questionInt("Qual valor da nota 1 ")
var nota2 = rs.questionInt("Qual valor da nota 2 ")
var nota3 = rs.questionInt("Qual valor da nota 3 ")

var media = (nota1 + nota2 + nota3) / 3

if(media >= 8){
    console.log("Aluno aprovado com louvar com nota ",media.toFixed(2))
}else if (media <7 && media >6){
    console.log("Passou raspando com nota ",media.toFixed(2))
}else console.log("Aluno reprovado com nota ",media.toFixed(2))