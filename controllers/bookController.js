import Book from "../models/Book.js";

export const getAll = async (req, res) => {
  try {
    const books = await Book.getAll()
    res.status(200).json({ status: 200, data: books });
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener libros" });
  }
};

export const getById = async (req, res) => {
  try {
    const {id} = req.params;
    const book = await Book.getById(id);
    if (!book) {
      return res
        .status(404)
        .json({ status: 404, error: 'Book not found' });
    }
    res.status(200).json({ status: 200, data: book });;
  } catch (error) {
    console.error(error);
    // console.log(book)
    console.log(id)
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};


export const getBooksWithAuthors = async (req, res) => {
  try {
    const books = await Book.find().populate("author");
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener libros con autores" });
  }
};


