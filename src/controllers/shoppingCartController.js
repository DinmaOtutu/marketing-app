/* eslint-disable import/no-cycle */
import ShoppingCartService from '../services/shoppingCartService';
import helper from '../utils/helper';

/**
 * @description Shopping cart controller class
 * @class ShoppingCartController
 */
class ShoppingCartController {
/**
   * @description Generete a unique CART ID
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {String} cart Id
   */
  static GenerateUniqueId(req, res) {
    return res.status(200).json({
      cart_id: helper.generateUniqueId()
    });
  }

  /**
   * @description Add product to cart
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} products in cart
   */
  static async AddProductToCart(req, res) {
    try {
      // eslint-disable-next-line camelcase
      const { cart_id, product_id, attributes } = req.body;
      const cart = {
        cartId: cart_id,
        productId: product_id,
        attributes
      };
      const products = await ShoppingCartService.AddProductToCart(cart);
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }

  /**
   * @description Get all products in cart
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} products in cart
   */
  static async GetProductsInCart(req, res) {
    try {
      const cartId = req.params.cart_id;
      const products = await ShoppingCartService.GetProductsInCart(cartId);
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }

  /**
   * @description Update the cart by item
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} products in cart
   */
  static async UpdateCartByItem(req, res) {
    try {
      const itemId = req.params.item_id;
      const { quantity } = req.body;
      const item = {
        itemId,
        quantity
      };
      const products = await ShoppingCartService.UpdateCartByItem(item);
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }

  /**
   * @description Empty cart
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} empty array
   */
  static async EmptyCart(req, res) {
    try {
      const cartId = req.params.cart_id;
      const result = await ShoppingCartService.EmptyCart(cartId);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }

  /**
   * @description Move a product to cart
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {null} no data
   */
  static async MoveToCart(req, res) {
    try {
      const itemId = req.params.item_id;
      await ShoppingCartService.MoveToCart(itemId);
      return res.status(200).json();
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }

  /**
   * @description Calculate total amount in cart
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} total amount
   */
  static async GetTotalAmount(req, res) {
    try {
      const cartId = req.params.cart_id;
      const totalAmount = await ShoppingCartService.GetTotalAmount(cartId);
      return res.status(200).json(totalAmount);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }

  /**
   * @description save a product for later
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {null} no data
   */
  static async SaveForLater(req, res) {
    try {
      const itemId = req.params.item_id;
      await ShoppingCartService.SaveForLater(itemId);
      return res.status(200).json();
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }

  /**
   * @description Get Products saved for latter
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} returns all saved products in a cart
   */
  static async GetSavedProducts(req, res) {
    try {
      const cartId = req.params.cart_id;
      const savedProducts = await ShoppingCartService.GetSavedProducts(cartId);
      return res.status(200).json(savedProducts);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }

  /**
   * @description Remove a product in the cart
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {null} returns no data
   */
  static async RemoveProductInCart(req, res) {
    try {
      const itemId = req.params.item_id;
      await ShoppingCartService.RemoveProductInCart(itemId);
      return res.status(200).json();
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }
}

export default ShoppingCartController;
