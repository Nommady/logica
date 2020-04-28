var rs = require("readline-sync")

var prod = rs.questionInt("Qual o valor do produto? ")
var pag = rs.questionInt("Qual a forma de pagamento? 1-(Dinheiro ou cheque) 2-(1x no cartao) 3-(2x no cartao) 4-(3x no cartao)")
//do {
    if (pag == 1) {
        valt = prod - ((prod / 100) * 10)
        console.log("Sua compra sai no valor de R$", valt.toFixed(2))
    } else if (pag == 2) {
        valt = prod - ((prod / 100) * 15)
        console.log("Sua compra sai no valor de R$", valt.toFixed(2))
    } else if (pag == 3) {
        valt = prod
        console.log("Sua compra sai no valor de R$", valt.toFixed(2))
    } else if (pag == 4) {
        valt = prod + ((prod / 100) * 10)
        console.log("Sua compra sai no valor de R$", valt.toFixed(2))
    }else console("Escolha uma forma de pagamento valida!")
//}
//while (pag !== 1 && pag !== 2 && pag !== 3 && pag !== 4)
//console.log("Favor escolher uma forma de pagamento valida! ")
