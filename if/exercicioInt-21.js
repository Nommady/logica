var rs = require("readline-sync")

var senha = rs.question("Digite a senha: ")

if (senha == "batatafrita"){
    console.log("ACESSO PERMITIDO")
}else console.log("ACESSO NEGADO")