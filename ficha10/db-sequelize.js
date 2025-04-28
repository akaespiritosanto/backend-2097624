const { Sequelize, Model, Datatypes} = require("sequelize");
const sequelize = new Sequelize("mysql://root:password@localhost:3306/ficha10") 

(async () => {
    await sequilize.sync({ force: false})
    .then(() => {
        console.log("Database and tables created!");
    } // inacabado
})


const book = await User.create({
    first_name: "Afonso",
    last_name: "Santo"
});