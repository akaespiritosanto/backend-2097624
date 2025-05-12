module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define("Book", {
      book_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      author_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      publication_date: {
          type: DataTypes.DATE,
          allowNull: true,
      },
      genre: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      available_copies: {
          type: DataTypes.INTEGER,
          allowNull: false,
      }
    }, {
      tableName: "books",
      timestamps: true
    });

    Book.associate = (models) => {
      Book.hasMany(models.Loan, {
        foreignKey: 'book_id',
        as: 'loans'
      });
    };

    return Book;
  };