module.exports = (sequelize, DataTypes) => {
    const Loan = sequelize.define("Loan", {
      loan_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "user_id"
          }
      },
      book_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "books",
            key: "book_id"
          }
      },
      loan_date: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
      },
      return_date: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }, {
      tableName: "loans",
      timestamps: true
    });

    Loan.associate = (models) => {
      Loan.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user"
      });
      Loan.belongsTo(models.Book, {
        foreignKey: "book_id",
        as: "book"
      });
    };

    return Loan;
  };
