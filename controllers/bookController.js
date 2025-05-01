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


export const getBooksWithAuthors = async (req, res) => {
  try {
    const books = await Book.find().populate("author");
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener libros con autores" });
  }
};


