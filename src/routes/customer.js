/* eslint-disable import/no-cycle */
import { Router } from 'express';
import CustomerController from '../controllers/customerController';
import verifyUserInput from '../middlewares/verifyInputs';

const router = Router();

router.post('/customers', verifyUserInput.registerCustomerRequestBody, CustomerController.RegisterCustomer);
router.post('/customers/login', verifyUserInput.loginCustomerRequestBody, CustomerController.LoginCustomer);

export default router;
