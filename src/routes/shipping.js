/* eslint-disable import/no-cycle */
import { Router } from 'express';
import ShippingController from '../controllers/shippingController';
import verifyUserInput from '../middlewares/verifyInputs';

const router = Router();

router.get('/', ShippingController.GetShippingRegions);
router.get('/:shipping_region_id', verifyUserInput.getShippingRegionId, ShippingController.GetShippingsByRegion);

export default router;
