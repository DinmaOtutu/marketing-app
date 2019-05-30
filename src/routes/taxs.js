import { Router } from 'express';
// eslint-disable-next-line import/no-cycle
import TaxsController from '../controllers/taxsController';

const router = Router();

router.get('/tax/', TaxsController.GetAllTax);
router.get('/tax/:taxId', TaxsController.GetTaxById);

export default router;
