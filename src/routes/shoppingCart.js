/* eslint-disable import/no-cycle */
import { Router } from 'express';
import ShoppingCartController from '../controllers/shoppingCartController';
import verifyUserInput from '../middlewares/verifyInputs';

const router = Router();

router.get('/generateUniqueId', ShoppingCartController.GenerateUniqueId);
router.post('/add', verifyUserInput.addProductRequestBody, ShoppingCartController.AddProductToCart);
router.get('/moveToCart/:item_id', verifyUserInput.getItemId, ShoppingCartController.MoveToCart);
router.get('/saveForLater/:item_id', verifyUserInput.getItemId, ShoppingCartController.SaveForLater);
router.delete('/removeProduct/:item_id', verifyUserInput.getItemId, ShoppingCartController.RemoveProductInCart);
router.put('/update/:item_id', verifyUserInput.updateCartByItem, ShoppingCartController.UpdateCartByItem);
router.delete('/empty/:cart_id', verifyUserInput.getCartId, ShoppingCartController.EmptyCart);
router.get('/totalAmount/:cart_id', verifyUserInput.getCartId, ShoppingCartController.GetTotalAmount);
router.get('/getSaved/:cart_id', verifyUserInput.getCartId, ShoppingCartController.GetSavedProducts);
router.get('/:cart_id', verifyUserInput.getCartId, ShoppingCartController.GetProductsInCart);


router.get('/product/:page/:count/:length', ShoppingCartController.Getproduct);

export default router;
