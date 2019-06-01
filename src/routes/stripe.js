/* eslint-disable import/no-cycle */
import { Router } from 'express';
import StripeController from '../controllers/StripeController';
import verifyToken from '../middlewares/verifyToken';

const router = Router();

router.post('/stripe/webhook', StripeController.stripeWebhook);

router.post('/charge', verifyToken, StripeController.payWithStripe);

export default router;
