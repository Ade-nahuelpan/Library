import Author from "../models/Author.js";

export const getAll = async (req, res) => {
  try {
    const authors = await Author.getAll();
    res.status(200).json({ status: 200, data: authors });
    res.json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
};

