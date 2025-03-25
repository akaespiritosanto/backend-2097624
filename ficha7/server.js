const { response } = require('express');
const express = require('express')
const app = express()
const mysql = require('mysql2');
const port = 3000

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});