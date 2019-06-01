/* eslint-disable import/no-cycle */
import { Router } from 'express';
import OrderController from '../controllers/orderController';
import verifyUserInput from '../middlewares/verifyInputs';
import verifyToken from '../middlewares/verifyToken';

const router = Router();

router.post('/', [verifyToken, verifyUserInput.createOrderRequestBody], OrderController.CreateOrder);
router.get('/inCustomer', verifyToken, OrderController.GetOrdersByCustomer);
router.get('/:order_id', [verifyToken, verifyUserInput.getOrderUrl], OrderController.GetOrderInfo);
router.get('/shortDetail/:order_id', [verifyToken, verifyUserInput.getOrderUrl], OrderController.GetOrderShortDetails)

export default router;
