const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.json());

var fileContent = fs.readFileSync("persons.json")
var dataObject = JSON.parse(fileContent);


//endpoint para obter a lista de pessoas
app.get('/users', (req, res) => {
  res.send(dataObject);
})


//function readFileSync(path){
  //var fileContent = fs.readFileSync(path);
  //return fileContent;
//}


app.get('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = null;
  for (let i = 0; i < dataObject.data.length; i++) {
    if(dataObject.data[i].id == id){
      person = dataObject.data[i];
    }
  }
  if (person){
    res.send(person);
  }
  else{
    res.send("ID not found!!");
  }
});

app.delete('/users/:id', (req, res) =>{
  var id = req.params.id;
  const result = dataObject.data.filter((person) => person.id != id)
  dataObject.data = result;
  if(result.length == dataObject.data.length){
    res.status(404).send("Id not found!!")
  }
  else{
    dataObject.data = result;
    res.send("ID:" + id + "Deleted")
  }

  res.send(dataObject);
  
  
});



app.post('/users', (req, res) => {
  var newPerson = req.body;
  dataObject.data.push(newPerson);
  res.send("New person added!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.put('./users/:id'), (req, res) => {

  //parametro de rota id
  var id = req.param.id;
  //detalhes do body
  var details = req.body;

  details.id = id;

  for (let i = 0; i < dataObject.data.length; i++){
    if (dataObject.data[i].id == id) {
        dataObject.data[i].id = details;
    }


  }};