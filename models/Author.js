import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthdate: Date,
  nationality: String,
});

const AuthorModel = mongoose.model("Author", authorSchema);

const getAll = async () => {
  return AuthorModel.find({});
};

export default { AuthorModel, getAll };