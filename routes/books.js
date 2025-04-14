import { Router } from 'express';
import bookController from '../controller/bookController.js';

const router = Router();

router.get('/',  bookController.getAll);
router.get('/:id', bookController.getBookById);
router.get('/:author', bookController.getBookByAuthor);
router.post('/',  bookController.create);
router.delete('/:id',  bookController.deleteBook);
router.patch('/:id',  bookController.updateBook);

export default router;