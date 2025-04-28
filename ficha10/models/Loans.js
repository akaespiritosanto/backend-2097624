module.exports = (sequelize) => {
    const Loan = sequelize.define("Loan", {
      loan_id: {
          type: sequelize.INT,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      user_id: {
          type: sequelize.INT,
          foreignKey: true,
          allowNull: false,
          references: {
            model: "users",
            key: "user_id"
          },
      },
      book_id: {
          type: sequelize.STRING,
          foreignKey: true,
          allowNull: false,
          references: {
            model: "books",
            key: "book_id"
          }
      },
      loan_date: {
          type: sequelize.DATE,
          allowNull: true,
      },
      return_date: {
        type: sequelize.DATE,
        allowNull: true,
    },
      tableName: "loans",
      timestamps: true
    });
  
    return Loan;
  };


Loan.associate = (models) => {
  Loan.belongsTo(models.User, {
    foreignKey: "user_id",
    as: "user"
  });
  Loan.belongsTo(models.Book, {
    foreignKey: "book_id",
    as: "book"
  });

  return Loan;
};
