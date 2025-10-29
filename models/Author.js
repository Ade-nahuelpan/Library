import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthdate: Date,
  nationality: String,
  books: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  ],
});

const AuthorModel = mongoose.model("Author", authorSchema);

const getAll = async () => {
  return AuthorModel.find({}).populate("books");
};

const getById = async (_id) => {
  return AuthorModel.findById(_id);
};

const create = async (authorData) => {
  const author = new AuthorModel(authorData);
  return author.save();
};

const update = async (_id, authorData) => {
  return AuthorModel.findByIdAndUpdate(_id, authorData, { new: true });
};

export default { AuthorModel, getAll, getById, create, update };
