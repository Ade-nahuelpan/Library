const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthdate: Date,
  nationality: String,
});

module.exports = mongoose.model("Author", authorSchema);