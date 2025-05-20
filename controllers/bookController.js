import Book from "../models/Book.js";

const getAll = async (req, res) => {
  try {
    const books = await Book.getAll()
    res.status(200).json({ status: 200, data: books });
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener libros" });
  }
};

const getById = async (req, res) => {
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

const create = async (req, res) => {
  try {
    const bookData = req.body; //requiere el body
    const createdBook = await Book.create(bookData); //crea el libro
    res.status(200).json({
      status: 200,
      data: createdBook,
    });
  } catch (error) {
    console.log(createdBook)
    console.error('Error creating book:', error);
    res.status(500).json({
      status: 500,
      error: 'Internal Server Error',
    });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const bookData = req.body;
    const updatedBook = await Book.update(id, bookData);
    console.log(updatedBook)
    if (!updatedBook) {
      return res.status(404).json({ status: 404, error: 'Book not found' });
    }
    res.status(200).json({ status: 200, data: updatedBook });
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
};

const deleteById = async (req, res) => {
  try {
    const {id} = req.params;
    const deletedBook = await Book.deleteById(id);
    if (!deletedBook) {
      return res.status(404).json({ status: 404, error: 'Book not found' });
    } 
    res.status(200).json({ status: 200, message: 'Book deleted successfully' });
  }catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
}

const getBooksWithAuthors = async (req, res) => {
  try {
    const books = await Book.find().populate("author");
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener libros con autores" });
  }
};

export { getAll, getById, create, update, getBooksWithAuthors, deleteById };

