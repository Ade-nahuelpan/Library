import { Router } from "express";
import { getAll, getById, create, update } from "../controllers/authorController.js";

const router = Router();

router.get("/", getAll);
router.get('/:id', getById);
router.post('/',  create);
// router.delete('/:id',  authorController.deleteAuthor);
 router.patch('/:id', update);

export default router;
