var rs = require("readline-sync")

var senha = rs.questionInt("Digite a senha: ")

if (senha == 1234) {
    console.log("ACESSO PERMITIDO")
} else { console.log("ACESSO NEGADO") }