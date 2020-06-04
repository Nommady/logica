var rs = require('readline-sync')

var ano1 = rs.question("Qual seu ano de nascimento?")
var ano2 = rs.question("Em que ano estamos?")

var idade = parseInt(ano2) - parseInt(ano1)

if (idade == 16) {
    console.log("Voce já pode votar.")
} else if (idade >= 18 && idade <= 64){
    console.log("Você é obrigado a votar.")
}else if(idade < 16 ){
    console.log("Você não pode votar")
}else console.log("Você não é mais obrigado a votar.")
