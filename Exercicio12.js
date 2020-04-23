var rs = require("readline-sync")

var sex = rs.questionInt("Digite 2 para escolher o sexo maculino e 1 para escolher o sexo feminino: ")
var estado = rs.question("Qual seu estado civil?")

if (sex == 1 && estado == "casada"){
    var tempo = rs.questionInt("Quanto tempo de casada?  ")
    console.log("fim do questionario ")
}