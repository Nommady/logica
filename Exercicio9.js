var rs = require("readline-sync")

var ang1 = rs.questionInt("Qual o valor do 1 angulo ")
var ang2 = rs.questionInt("Qual o valor do 2 angulo ")
var ang3 = rs.questionInt("Qual o valor do 3 angulo ")

if (ang1 = 90 && ang2 == 90 && ang3 == 90){
    console.log("É um triangulo retangulo")
}else if (ang1 > 90 && ang2 >90 && ang3 >90){
    console.log("É um triangulo obtusangulo")
}else if (ang1 < 90 && ang2 < 90 && ang3 < 90){
    console.log("É um triangulo actangulo")
}else console.log("EU ACHO Q NAO ENTENDI ESSE EXERCICIO")

