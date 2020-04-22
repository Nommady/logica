var rs = require("readline-sync")

var sex = rs.questionInt("Digite 2 para escolher o sexo maculino e 1 para escolher o sexo feminino: ")
var alt = rs.questionFloat("Digite sua altura: ")

if (sex === 1) {
    var result = (62.1 * alt) - 44.7
    console.log("Seu peso ideal é: ", result)
} else {
  var result = (72.7 * alt) - 58
  console.log("Seu peso ideal é: ", result)}

