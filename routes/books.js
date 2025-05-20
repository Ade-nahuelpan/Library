import { Router } from 'express';
import { getBooksWithAuthors, getAll, getById, create, update, deleteById} from '../controllers/bookController.js';

const router = Router();

router.get("/",  getAll);
router.get('/:id', getById);
router.get("/with-authors", getBooksWithAuthors);
router.post('/',  create);
router.patch('/:id',  update);
router.delete('/:id',  deleteById);
// router.patch('/:id',  bookController.updateBook);

export default router;