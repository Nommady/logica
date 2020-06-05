const sql = require('sqlite3')
var rs = require('readline-sync')

const db = new sql.Database('Carros.db', (erro) => {
    if (erro) {
        console.log(erro.message)
    } else {
        console.log("Conectado com suceso no BD")
    }
})

//db.run('CREATE TABLE carros(marca text, modelo text, cor text, ano integer, valor integer)')

function inserirCarro() {
    var marca = rs.question("Diga a marca do carro: ")
    var modelo = rs.question("Diga o modelo do carro: ")
    var cor = rs.question("Diga a cor do carro: ")
    var ano = rs.question("Diga o ano do carro: ")
    var valor = rs.question("Diga o valor do carro: ")

    var row = [marca, modelo, cor, ano, valor]

    let inserir = "INSERT INTO carros(marca, modelo, cor, ano, valor) VALUES (?, ?, ?, ?, ?)";

    db.run(inserir, row, function (erro) {
        if (erro) {
            console.log(erro.message)
            return;
        }
    })
}

inserirCarro()