var rs = require('readline-sync')
//capturar dados
var num1, num2
var num1 = rs.question ("Qual o primeiro numero?")
var num2 = rs.question("Qual o segundo numero?")
var num3  = parseInt(num1) + parseInt(num2) 

function comparar (num1,num2){
    if (num1 > num2) {
        console.log("O primeiro numero é maior que e o segundo")
    }
    else if (num1 < num2){
         console.log("O segundo numero é maior que o prmeiro")
        }
        else{
            console.log("Os numeros são iguais")
           }
}
console.log("O primeiro numero é:" +num1)
console.log("O segundo numero é:" +num2)
console.log("a soma dos valores é:",num3)
comparar(num1,num2)