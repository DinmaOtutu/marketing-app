/* eslint-disable import/no-cycle */
import sequelize from '../bin/www';

/**
 * @description Shopping cart repository class
 * @class ShoppingCartRepository
 */
class ShoppingCartRepository {
  /**
     * @description Add product to cart
     * @param {Object} cart - cart object
     * @returns {Object}  result from query
     */
  static async AddProductToCart(cart) {
    try {
      const result = await sequelize.query('CALL shopping_cart_add_product(:cartId, :productId, :attributes);', {
        replacements: {
          cartId: cart.cartId,
          productId: cart.productId,
          attributes: cart.attributes
        },
        type: sequelize.QueryTypes.INSERT
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Get List of Products in Shopping Cart
     * @param {Number} cartId - cart Id
     * @returns {Object} returns all products in cart with this ID
     */
  static async GetProductsInCart(cartId) {
    try {
      const result = await sequelize.query('CALL shopping_cart_get_products(:cartId);', {
        replacements: {
          cartId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Update the cart by item
     * @param {Object} item - item object
     * @returns {Object} returns all products in cart
     */
  static async UpdateCartByItem(item) {
    try {
      const result = await sequelize.query('CALL shopping_cart_update(:itemId, :quantity);', {
        replacements: {
          itemId: item.itemId,
          quantity: item.quantity
        },
        type: sequelize.QueryTypes.UPDATE
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Empty cart
     * @param {Number} cartId - cart id
     * @returns {Object} returns result
     */
  static async EmptyCart(cartId) {
    try {
      const result = await sequelize.query('CALL shopping_cart_empty(:cartId);', {
        replacements: {
          cartId
        },
        type: sequelize.QueryTypes.DELETE
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Move to cart
     * @param {Number} itemId - item Id
     * @returns {Object} returns result
     */
  static async MoveToCart(itemId) {
    try {
      const result = await sequelize.query('CALL shopping_cart_move_product_to_cart(:itemId);', {
        replacements: {
          itemId
        },
        type: sequelize.QueryTypes.UPDATE
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Calculate total amount in cart
     * @param {Number} cartId - cart Id
     * @returns {Object} returns result
     */
  static async GetTotalAmount(cartId) {
    try {
      const result = await sequelize.query('CALL shopping_cart_get_total_amount(:cartId);', {
        replacements: {
          cartId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description save a product for later
     * @param {Number} itemId - item Id
     * @returns {Object} returns result
     */
  static async SaveForLater(itemId) {
    try {
      const result = await sequelize.query('CALL shopping_cart_save_product_for_later(:itemId);', {
        replacements: {
          itemId
        },
        type: sequelize.QueryTypes.UPDATE
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Get Products saved for latter
     * @param {Number} cartId - cart Id
     * @returns {Object} returns result
     */
  static async GetSavedProducts(cartId) {
    try {
      const result = await sequelize.query('CALL shopping_cart_get_saved_products(:cartId);', {
        replacements: {
          cartId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Remove a product in the cart
     * @param {Number} itemId - item Id
     * @returns {Object} returns result
     */
  static async RemoveProductInCart(itemId) {
    try {
      const result = await sequelize.query('CALL shopping_cart_remove_product(:itemId);', {
        replacements: {
          itemId
        },
        type: sequelize.QueryTypes.DELETE
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default ShoppingCartRepository;
