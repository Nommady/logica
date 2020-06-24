Exercicio 1 -  db.restaurantes.find({})

Exercicio 2 - db.restaurantes.find({ },{"_id":1,"name":1, "borough":1, "cuisine":1})

Exercicio 3 - db.restaurantes.find({ },{"_id":0,"name":1, "borough":1, "cuisine":1 })

Exercicio 4 - db.restaurantes.find({ 
    borough: "Bronx"
    })

Exercicio 5 - db.restaurantes.find({
    borough: "Bronx"    
    }).limit(5)

Exercicio 6 - db.restaurantes.find({
    borough: "Bronx"    
    }).skip(5).limit(5)

Exercicio 7 - db.restaurantes.find({
    "grades.score":{$gt:90}
    })

Exercicio 8 - db.restaurantes.find({
    "grades.score":{$gt:80,$lt: 100} 
    })

