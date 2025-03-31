const { response } = require('express');
const express = require('express')
const app = express()
const mysql = require('mysql2');
const port = 3000

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "ficha7-ctesp"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!")
});

app.get('/users', (req, res) => {
    connection.query("SELECT * FROM users", function (err, results, fields) {
        if (err) {
            console.error(err);
            return res.status(500).send("Erro ao buscar user");
        }
        res.json(results);
    });
});


// ERRADO
app.post("/users", (req, res) => {
    connection.query("SELECT MAX(id) FROM users", function (err, results, fields) {
        if (err) {
            console.error(err);
            return res.status(500).send("Erro ao buscar user");
        }
        var max_id = req.json(results);
        connection.query("INSERT INTO users (id, firstname, lastname, profession, age) VALUES ()")
    });
});


// IV incompleto
app.get("/users/:age/:profession", (req, res) => {
    var age = req.params.age;
    var profession = req.params.profession;
    connection.query("SELECT * FROM users WHERE age = ? AND PROFESSION = ?")
    if (err) throw err;
    response.send(results)
});

// V incompleto
app.put("users/:id"), (req, res) => {
    var id = req.params.id;
    var details = req.body;
    connection.query("UPDATE users set ? WHERE id = ?", [details, id], function (err, results, fields) {
        res.send("Changed")
    })
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});