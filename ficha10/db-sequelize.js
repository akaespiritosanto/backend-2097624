const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql://root:password@localhost:3306/ficha10");

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./models/User.js')(sequelize, DataTypes);
db.Book = require('./models/Books.js')(sequelize, DataTypes);
db.Loan = require('./models/Loans.js')(sequelize, DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database and tables created!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();

module.exports = db;