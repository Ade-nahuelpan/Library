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

const getById = async (_id) => {
  return AuthorModel.findById(_id);
};

export default { AuthorModel, getAll, getById };