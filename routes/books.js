import { Router } from 'express';
import { getBooksWithAuthors, getAll, getById, create} from '../controllers/bookController.js';

const router = Router();

router.get("/",  getAll);
router.get('/:id', getById);
router.get("/with-authors", getBooksWithAuthors);
router.post('/',  create);
// router.delete('/:id',  bookController.deleteBook);
// router.patch('/:id',  bookController.updateBook);

export default router;