import { Router } from "express";
import { getAll } from "../controllers/authorController.js";

const router = Router();

router.get("/", getAll);
// router.get('/:id', authorController.getAuthorById);
// router.post('/',  authorController.create);
// router.delete('/:id',  authorController.deleteAuthor);
// router.patch('/:id',  authorController.updateAuthor);

export default router;
