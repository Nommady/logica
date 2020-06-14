const isPrime = require('prime-number')
const rs = require('readline-sync')
const chalk = require('chalk');

var num = rs.questionInt("Diga um numero: ")

if (isPrime(num) == true) {
    console.log(chalk.red("O numero é primo"))
} else {
    console.log(chalk.blue("O numero não é primo"))
}