var rs = require("readline-sync")

var lados1 = rs.questionInt("Quantos cm tem o primeiro lado? ")
var lados2 = rs.questionInt("Quantos cm tem o segundo lado? ")
var lados3 = rs.questionInt("Quantos cm tem o terceiro lado? ")

if (lados1 == lados2 && lados2 == lados3){
    console.log("É um triangulo equilatero")
}else if ((lados1 == lados2 && lados2 !== lados3) ||(lados1 !== lados2 && lados2 == lados3)
|| (lados1 == lados3 && lados3 !== lados2 )){
    console.log("É um triagnulo Isoscele")
}else console.log("É um triangulo Escaleno")