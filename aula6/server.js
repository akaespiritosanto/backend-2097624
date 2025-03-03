const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

var fileContent = fs.readFileSync("persons.json");
var dataObj = JSON.parse(fileContent);


app.post('/users', (req, res) => {
    var newPerson = (req.body);
    dataObj.data.push(newPerson);
    res.send(req.body);
  })

app.delete('/users/:id', (req, res) => {
    var id = req.params.id;
  })

app.get('/users', (req, res) => {
    for (let index=0; index < dataObj.data.length; index++){
        
    }
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

// {"id":6,"firstName":"João","lastName":"Silva","gender":"Masculino","age":41,"profession":"Programador"}