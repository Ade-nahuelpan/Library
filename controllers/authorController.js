import AuthorModel from "../models/Author";

const getAll = async (req, res) => {
  try {
    const authors = await AuthorModel.getAll();
    res.status(200).json({ status: 200, data: authors });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, error: "Internal Server Error" });
  }
};



export default { getAll };