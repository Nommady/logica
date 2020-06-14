const isPrime = require('prime-number')
const rs = require('readline-sync')

var num = rs.questionInt("Diga um numero: ")

if (isPrime(num) == true) {
    console.log("O numero é primo")
} else {
    console.log("O numero não é primo")
}