var rs = require("readline-sync")
var ext = require("extenso")


var num = rs.question("Digite um numero: ")

var unidades = ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
var especiais = ["Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezesete", "Dezoito", "Dezenove"];
var dezenas = ["Dez", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
var centenas = ["Cem", "Duzentos", "Trezentos", "Quatrocentos", "Quinhetos", "Seiscentos", "Setescentos", "Oitocentos", "Novecentos"];
var cento = ["Cento"]
//de 0 a 9
if (num.length == 1) {
    console.log(unidades[num]);
}
else if (num.length == 2 && num[0] == 1 && num[1] == 0) {
    console.log(dezenas[0])
} else if (num.length == 2 && num[0] == 1) {
    console.log(especiais[num[1] - num[0]])

}else if (num.length == 2 && num[1] == 0 ) { //dezenas
    var num2 = parseInt(num[0])  
    console.log(dezenas[num2-1])
}else if (num.length == 2) {//de 11 a 99    

    var num2 = parseInt(num[0])
    console.log(dezenas[num2 - 1], "e", unidades[num[1]])

}else if (num.length == 3 && num[0] == 1 && num[1] == 0 && num[2] == 0) {//cem
    console.log(centenas[0])
} 
else if (num.length == 3 && num[1] == 1) {
    var num2 = parseInt(num[2])
       console.log(cento[0], "e",especiais[num2 - 1])
} 
else if (num.length == 3 && num[1] == 1) {
    var num2 = parseInt(num[1])
       console.log(cento[0], "e",dezenas[num2 - 1])
}else if (num.length == 3) {
    var num1 = parseInt(num[0])
    var num2 = parseInt(num[1])
    var num3 = parseInt(num[2])
    console.log(centenas[num1 -1], "e",dezenas[num2 - 1],"e",unidades[num[2]])
} 