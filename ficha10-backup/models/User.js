
module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    user_id: {
        type: sequelize.INT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    first_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: true,
    },
    adress: {
        type: sequelize.STRING,
        allowNull: true,
    },
    phone_number: {
        type: sequelize.INT,
        allowNull: true,
    },
    tableName: "users",
    timestamps: true
  });

  return User;
};
