import { Router } from 'express';
import { getBooksWithAuthors, getAll } from '../controllers/bookController.js';
const router = Router();

router.get('/',  getAll);
// router.get('/:id', bookController.getBookById);
router.get('/with-authors', getBooksWithAuthors);
// router.post('/',  bookController.create);
// router.delete('/:id',  bookController.deleteBook);
// router.patch('/:id',  bookController.updateBook);

export default router;