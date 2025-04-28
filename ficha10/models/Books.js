module.exports = (sequelize) => {
    const Book = sequelize.define("Book", {
      book_id: {
          type: sequelize.INT,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
      },
      title: {
          type: sequelize.STRING,
          allowNull: false
      },
      author_name: {
          type: sequelize.STRING,
          allowNull: false
      },
      publication_date: {
          type: sequelize.DATE,
          allowNull: true,
      },
      genre: {
          type: sequelize.STRING,
          allowNull: false,
      },
      available_copies: {
          type: sequelize.INT,
          allowNull: false,
      },
      tableName: "books",
      timestamps: true
    });
  
    return Book;
  };