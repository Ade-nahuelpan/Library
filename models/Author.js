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
 
const create = async (authorData) => {
  const author = new AuthorModel(authorData);
  return author.save();
}

const update = async (_id, authorData) => {
};

export default { AuthorModel, getAll, getById, create };