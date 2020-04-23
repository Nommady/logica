var rs = require("readline-sync")

var sal = rs.questionFloat("Qual o valor do seu salario? ")
var emp = rs.questionFloat("Qual o valor do seu emprestimo? ")
var prest = rs.questionFloat("Em quantas prestacoes? ")
var vparc = (sal / prest) 
if (vparc >= ((sal/100) *30)){
    console.log("Emprestimo negado")
}else console.log("Emprestimo aprovado")