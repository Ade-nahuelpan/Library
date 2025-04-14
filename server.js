import express from "express";
import cors from "cors";
import mongoose from "mongoose"
//import authorsRoute from "./routes/authors.js"
//import booksRoute from "./routes/books.js"
//import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();


app.use(cors());
app.use(express.json());
// app.use("/authors", authorsRoute)
// app.use("/books", booksRoute)
//app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
