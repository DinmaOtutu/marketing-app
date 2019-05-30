import { Router } from 'express';
// eslint-disable-next-line import/no-cycle
import AttributeController from '../controllers/attributesController';

const router = Router();

router.get('/attributes', AttributeController.GetAttributeList);
router.get('/attributes/:attributeId', AttributeController.GetAttributesById);
router.get('/attributes/values/:attributeId', AttributeController.GetAttributesValueById);
router.get('/attributes/inProduct/:productId', AttributeController.GetAttributesByProductId);

export default router;
