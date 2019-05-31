/* eslint-disable import/no-cycle */
import ShoppingCartRepository from '../repositories/shoppingCartRepository';

/**
 * @description Shopping cart service class
 * @class ShoppingCartService
 */
class ShoppingCartService {
  /**
     * @description Add product to cart
     * @param {Object} cart - cart object
     * @returns {Object} returns all products in cart
     */
  static async AddProductToCart(cart) {
    await ShoppingCartRepository.AddProductToCart(cart);
    const products = await this.GetProductsInCart(cart.cartId);
    return products;
  }

  /**
     * @description Get List of Products in Shopping Cart
     * @param {Number} cartId - cart Id
     * @returns {Object} returns all products in cart with this ID from repository
     */
  static async GetProductsInCart(cartId) {
    const result = await ShoppingCartRepository.GetProductsInCart(cartId);
    const products = Object.values(result[0]);
    return products;
  }

  /**
     * @description Update the cart by item
     * @param {Object} item - item object
     * @returns {Object} returns all products in cart
     */
  static async UpdateCartByItem(item) {
    const result = await ShoppingCartRepository.UpdateCartByItem(item);
    let products = [];
    if (result[0]) {
      products = await this.GetProductsInCart(result[0].cart_id);
    }
    return products;
  }

  /**
     * @description Empty cart
     * @param {Number} cartId - cart Id
     * @returns {Object} returns an empty array
     */
  static async EmptyCart(cartId) {
    await ShoppingCartRepository.EmptyCart(cartId);
    return [];
  }

  /**
     * @description Move to cart
     * @param {Number} itemId - item Id
     * @returns {Object} returns no data
     */
  static async MoveToCart(itemId) {
    await ShoppingCartRepository.MoveToCart(itemId);
  }

  /**
     * @description Calculate total amount in cart
     * @param {Number} cartId - cart Id
     * @returns {Number} returns total amount
     */
  static async GetTotalAmount(cartId) {
    const totalAmount = await ShoppingCartRepository.GetTotalAmount(cartId);
    return totalAmount[0]['0'];
  }

  /**
     * @description save a product for later
     * @param {Number} itemId - item Id
     * @returns {Object} returns no data
     */
  static async SaveForLater(itemId) {
    await ShoppingCartRepository.SaveForLater(itemId);
  }

  /**
     * @description Get Products saved for latter
     * @param {Number} cartId - cart Id
     * @returns {Number} returns all saved products in a cart
     */
  static async GetSavedProducts(cartId) {
    const result = await ShoppingCartRepository.GetSavedProducts(cartId);
    const savedProducts = Object.values(result[0]);
    return savedProducts;
  }

  /**
     * @description Remove a product in the cart
     * @param {Number} itemId - item Id
     * @returns {Object} returns no data
     */
  static async RemoveProductInCart(itemId) {
    await ShoppingCartRepository.RemoveProductInCart(itemId);
  }
}

export default ShoppingCartService;
