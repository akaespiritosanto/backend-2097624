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

app.post("/users", (req, res) => {
    const { firstname, lastname, profession, age } = req.body;
    connection.query(
        "INSERT INTO users (firstname, lastname, profession, age) VALUES (?, ?, ?, ?)",
        [firstname, lastname, profession, age],
        function (err, results) {
            if (err) {
                console.error(err);
                return res.status(500).send("Erro ao adicionar user");
            }
            res.json({ id: results.insertId });
        }
    );
});

app.delete("/users", (req, res) => {
    const { id } = req.body;
    connection.query(
        "DELETE FROM users WHERE id = ?",
        [id],
        function (err, results) {
            if (err) {
                console.error(err);
                return res.status(500).send("Erro ao apagar user");
            }
            if (results.affectedRows === 0) {
                return res.status(404).send("User não encontrado");
            }
            res.json({ affectedRows: results.affectedRows });
        }
    );
});

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    connection.query(
        "DELETE FROM users WHERE id = ?",
        [id],
        function (err, results) {
            if (err) {
                console.error(err);
                return res.status(500).send("Erro ao apagar user");
            }
            if (results.affectedRows === 0) {
                return res.status(404).send("User não encontrado");
            }
            res.json({ affectedRows: results.affectedRows });
        }
    );
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    connection.query(
        "SELECT * FROM users WHERE id = ?",
        [id],
        function (err, results) {
            if (err) {
                console.error(err);
                return res.status(500).send("Erro ao buscar user");
            }
            if (results.length === 0) {
                return res.status(404).send("User não encontrado");
            }
            res.json(results[0]);
        }
    );
});

app.get("/users/age/:age/profession/:profession", (req, res) => {
    const { age, profession } = req.params;
    connection.query(
        "SELECT * FROM users WHERE age = ? AND profession = ?",
        [age, profession],
        function (err, results) {
            if (err) {
                console.error(err);
                return res.status(500).send("Erro ao buscar users");
            }
            if (results.length === 0) {
                return res.status(404).send("Nenhum user encontrado com esses critérios");
            }
            res.json(results);
        }
    );
});

app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const { firstname, lastname, profession, age } = req.body;
    connection.query(
        "UPDATE users SET firstname = ?, lastname = ?, profession = ?, age = ? WHERE id = ?",
        [firstname, lastname, profession, age, id],
        function (err, results) {
            if (err) {
                console.error(err);
                return res.status(500).send("Erro ao atualizar user");
            }
            if (results.affectedRows === 0) {
                return res.status(404).send("User não encontrado");
            }
            res.json({ id, firstname, lastname, profession, age });
        }
    );
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
