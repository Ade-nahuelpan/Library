import Author from "../models/Author.js";

export const getAll = async (req, res) => {
  try {
    const authors = await Author.getAll();
    res.status(200).json({
      status: 200, 
      data: authors 
    });
    res.json(authors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
};

const getById = async (req, res) => {
  try{
    const { id } = req.params;
    const author = await Author.getById(id);
    if (!author) {
      return res.status(404).json({ status: 404, error: "Author not found" });
    }
    res.status(200).json({ status: 200, data: author });
  }catch(error){
    console.error(error);
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
};

