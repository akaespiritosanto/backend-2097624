const { request } = require('express');
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const {Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mysql://root:password@localhost:3306/ficha9');
 
const Car = require("./models/Car")(sequelize, Model, DataTypes);
const Stand = require("./models/Stand")(sequelize, Model, DataTypes);

(async () => {
  await sequelize.sync({force: true});
  const car = await Car.create({
    brand: 'bmw',
    model: '240',
    licensePlate: '23-43-ZZ',
    color: 'RED',
    year: 2025,
    power: 300,
    displacement: 3000    
  });
  console.log(car.toJSON());
})();

(async () => {
    await sequelize.sync({force: true});
    const stand = await Stand.create({
        name: "Madeira-motores",
        adress: "funchal",
        postalcode: "9050-225"  
    });
    console.log(stand.toJSON());
})();

app.get("/cars", async (req, res) =>{
    const {Car} = req.body; 
    
    //errado
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});