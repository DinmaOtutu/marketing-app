/* eslint-disable import/no-cycle */
import { Router } from 'express';
import CategoryController from '../controllers/categoryController';
import verifyToken from '../middlewares/verifyToken';

const router = Router();

router.use(verifyToken);
router.get('/category', verifyToken, CategoryController.getAllCategories);
router.get('/categories/inProduct/:productId', verifyToken, CategoryController.GetCategoryOfProduct);
router.get('/category/:category_id', verifyToken, CategoryController.GetACategory);
router.get('/categories/inDepartment/:departmentId', verifyToken, CategoryController.GetCategoryOfDepartment);

export default router;
