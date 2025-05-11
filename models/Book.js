import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  publishedYear: Number,
  genres: [String],
  available: { type: Boolean, default: true },
});

const BookModel = mongoose.model("Book", bookSchema);

const getAll = async () => {
  return BookModel.find({});
};

const getById = async (id) => {
  return BookModel.findById(id);
};

const create = async (bookData) => {
  const book = new BookModel(bookData);
  return book.save();
};




export default {BookModel, getAll, getById, create};