const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql://root:password@localhost:3306/ficha10");
const User = require('./models/User.js');
const Books = require('./models/Books.js');
const Loans = require('./models/Loans.js');

(async () => {
    await sequelize.sync({ force: false })
    .then(() => {
        console.log("Database and tables created!");
        return User.create({
            first_name: "Afonso",
            last_name: "Santo"
        });
    });
})();

module.exports = {
  Sequelize,
  User, 
  Books,
  Loans
};