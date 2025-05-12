
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
  }, {
    tableName: "users",
    timestamps: true
  });

  User.associate = (models) => {
    User.hasMany(models.Loan, {
      foreignKey: 'user_id',
      as: 'loans'
    });
  };

  return User;
};
