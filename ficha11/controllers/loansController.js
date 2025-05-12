const db = require('../db-sequelize');
const Loan = db.Loan;
const User = db.User;
const Book = db.Book;

exports.getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Book, as: 'book' }
      ]
    });
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLoanById = async (req, res) => {
  try {
    const loan = await Loan.findByPk(req.params.id, {
      include: [
        { model: User, as: 'user' },
        { model: Book, as: 'book' }
      ]
    });
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    res.status(200).json(loan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createLoan = async (req, res) => {
  try {
    const user = await User.findByPk(req.body.user_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const book = await Book.findByPk(req.body.book_id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    if (book.available_copies <= 0) {
      return res.status(400).json({ message: 'Book is not available for loan' });
    }
    const loan = await Loan.create({
      user_id: req.body.user_id,
      book_id: req.body.book_id,
      loan_date: new Date(),
      return_date: req.body.return_date || null
    });
    await Book.update(
      { available_copies: book.available_copies - 1 },
      { where: { book_id: book.book_id } }
    );
    res.status(201).json(loan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateLoan = async (req, res) => {
  try {
    const loan = await Loan.findByPk(req.params.id);
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    await Loan.update(req.body, {
      where: { loan_id: req.params.id }
    });
    if (req.body.return_date && !loan.return_date) {
      const book = await Book.findByPk(loan.book_id);
      await Book.update(
        { available_copies: book.available_copies + 1 },
        { where: { book_id: book.book_id } }
      );
    }
    const updatedLoan = await Loan.findByPk(req.params.id);
    res.status(200).json(updatedLoan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteLoan = async (req, res) => {
  try {
    const loan = await Loan.findByPk(req.params.id);
    if (!loan) {
      return res.status(404).json({ message: 'Loan not found' });
    }
    if (!loan.return_date) {
      const book = await Book.findByPk(loan.book_id);
      await Book.update(
        { available_copies: book.available_copies + 1 },
        { where: { book_id: book.book_id } }
      );
    }
    await Loan.destroy({
      where: { loan_id: req.params.id }
    });
    res.status(200).json({ message: 'Loan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
