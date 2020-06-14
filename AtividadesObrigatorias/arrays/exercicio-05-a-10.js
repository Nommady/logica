/*exercicio 05
var nome = rs.question("Diga seu nome: ")

var TerceiraLetraDoNome = nome.charAt(2)

console.log(TerceiraLetraDoNome)

Exercicio 6
var palavra = rs.question("Digite uma palavra: ")

var fim = palavra.endsWith("al")

if (fim == true){
    console.log(palavra)
}else console.log("Palavra nao identificada")

Exercicio 7
var palavra = rs.question("Digite uma palavra: ")

var inclui = palavra.includes("np","nb")

if (inclui == true){
    console.log("Aprende a escrever")
}else console.log("A palavra esta correta")

Exercicio 8
var palavra = rs.question("Digite uma palavra: ").toLowerCase()

var inclui = palavra.indexOf("a","e", "i", "o", "u")

if (inclui == true){
    console.log("A palavra possui vogais")
}else console.log("A palavra nao possui vogais")

Exercicio 9

var palavra = rs.question("Digite uma frase: ").toLowerCase().split(" ")
var frasePronta = ""
for (var i = 0; i < palavra.length; i++){
    if (palavra[i] == "bosta"){
        palavra[i] = " estrume "
        frasePronta = palavra
    }
}
console.log(frasePronta.toString())

Exercicio 10
    var palavra = rs.question("Digite uma frase: ").toUpperCase()
    console.log(palavra)
*/