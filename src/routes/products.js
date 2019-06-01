/* eslint-disable import/no-cycle */
import { Router } from 'express';
import ProductsController from '../controllers/productsController';
import verifyToken from '../middlewares/verifyToken';

const router = Router();

router.get('/products/', ProductsController.GetAllProducts);
router.get('/products/:productId', ProductsController.GetProductById);
router.get('/products/inCategory/:categoryId', ProductsController.GetProductByCategoryId);
router.get('/products/:productId/details', ProductsController.GetProductDetailsByProductId);
router.get('/products/:productId/locations', ProductsController.GetProductLocationByProductId);
router.get('/products/:productId/reviews', ProductsController.GetProductReviewByProductId);
router.get('/product/search/', ProductsController.ProductSearch);
router.post('/products/:productId/reviews', verifyToken, ProductsController.PostProductReviews);
router.get('/products/inDepartment/:departmentId', ProductsController.GetProductsByDepartmentId);

export default router;
