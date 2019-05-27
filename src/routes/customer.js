/* eslint-disable import/no-cycle */
import { Router } from 'express';
import CustomerController from '../controllers/customerController';
import verifyUserInput from '../middlewares/verifyInputs';
import verifyToken from '../middlewares/verifyToken';

const router = Router();

router.post('/customers', verifyUserInput.registerCustomerRequestBody, CustomerController.RegisterCustomer);
router.post('/customers/login', verifyUserInput.loginCustomerRequestBody, CustomerController.LoginCustomer);

router.use(verifyToken);
router.get('/customer', verifyToken, CustomerController.getSingleCustomer);
router.put('/customers/address', verifyToken, CustomerController.UpdateCustomer);
router.put('/customer', verifyToken, CustomerController.UpdateCustomerAccount);
router.put('/customers/creditCard', verifyToken, CustomerController.updateCustomerCreditCard);

export default router;
