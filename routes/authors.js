import { Router } from 'express';
import authorController from '../controller/authorController.js';

const router = Router();

router.get('/',  authorController.getAll);
router.get('/:id', authorController.getAuthorById);
router.post('/',  authorController.create);
router.delete('/:id',  authorController.deleteAuthor);
router.patch('/:id',  authorController.updateAuthor);

export default router;