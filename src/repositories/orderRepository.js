/* eslint-disable import/no-cycle */
import sequelize from '../bin/www';

/**
 * @description Order repository class
 * @class OrderRepository
 */
class OrderRepository {
  /**
     * @description create an order
     * @param {Object} order - order to be created
     * @returns {Number} returns a newly created order ID
     */
  static async CreateOrder(order) {
    try {
      const result = await sequelize.query('CALL shopping_cart_create_order(:cartId, :customerId, :shippingId, :taxId);', {
        replacements: {
          cartId: order.cartId,
          customerId: order.customerId,
          shippingId: order.shippingId,
          taxId: order.taxId
        },
        type: sequelize.QueryTypes.INSERT
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Get info about order
     * @param {Number} orderId - order Id
     * @returns {Object} returns information of the order with this ID
     */
  static async GetOrderInfo(orderId) {
    try {
      const result = await sequelize.query('CALL orders_get_order_details(:orderId);', {
        replacements: {
          orderId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Get orders by Customer
     * @param {Number} customerId - customer Id
     * @returns {Object} returns orders for customer with this ID
     */
  static async GetOrdersByCustomer(customerId) {
    try {
      const result = await sequelize.query('CALL orders_get_by_customer_id(:customerId);', {
        replacements: {
          customerId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description Get info about order
     * @param {Number} orderId - order Id
     * @returns {Object} returns short details of the order with this ID
     */
  static async GetOrderShortDetails(orderId) {
    try {
      const result = await sequelize.query('CALL orders_get_order_short_details(:orderId);', {
        replacements: {
          orderId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default OrderRepository;
