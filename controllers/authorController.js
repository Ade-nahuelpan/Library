import Author from "../models/Author.js";

 const getAll = async (req, res) => {
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

const create = async (req, res) => {
  try {
    const authorData = req.body;
    const createdAuthor = await Author.create(authorData);
    res.status(200).json({
      status: 200,
      data: createdAuthor,
    });
  } catch (error) {
    console.error("Error creating author:", error);
    res.status(500).json({
      status: 500,
      error: "Internal Server Error",
    });
  }
}

export { getAll, getById, create };