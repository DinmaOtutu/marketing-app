/* eslint-disable import/no-cycle */
import { Router } from 'express';
import TaxsController from '../controllers/taxsController';

const router = Router();

router.get('/tax/', TaxsController.GetAllTax);
router.get('/tax/:taxId', TaxsController.GetTaxById);

export default router;
