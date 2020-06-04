var rs = require("readline-sync")

var lados1 = rs.questionInt("Quantos lados tem? ")
var lados2 = rs.questionInt("Quantos centimetros de base? ")
var lados3 = rs.questionInt("Quantos centimetros de altura? ")

if (lados1 == 3){
    var area = (lados3 * lados2) / 2
    console.log("É um triangulo com a are de ",area,"cm")
}else if (lados1 == 4){
    var area = lados2 * lados3
    console.log("É um quadrado com a are de ",area,"cm")
}else if (lados1 == 5) {var area = (lados2 * 5) * (lados3 / 2) /2
    console.log("É um pentagono com a are de ",area,"cm")
}
