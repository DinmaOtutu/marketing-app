/* eslint-disable import/no-cycle */
import dotenv from 'dotenv';
import OrderService from '../services/orderService';

dotenv.config();
/**
 * @description Order controller class
 * @class OrderController
 */
class OrderController {
  /**
   * @description Create an Order
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Number} orderId
   */
  static async CreateOrder(req, res) {
    try {
      // eslint-disable-next-line camelcase
      const { cart_id, shipping_id, tax_id } = req.body;
      const customerId = req.userData.id;
      const order = {
        cartId: cart_id,
        shippingId: shipping_id,
        taxId: tax_id,
        customerId
      };
      const orderId = await OrderService.CreateOrder(order);
      return res.status(200).json({
        orderId
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }

  /**
   * @description Get info about order
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} order info
   */
  static async GetOrderInfo(req, res) {
    try {
      const orderId = req.params.order_id;
      const orderInfo = await OrderService.GetOrderInfo(orderId);
      return res.status(200).json(orderInfo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }

  /**
   * @description Get orders by Customer
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer orders
   */
  static async GetOrdersByCustomer(req, res) {
    try {
      const customerId = req.userData.id;
      const customerOrders = await OrderService.GetOrdersByCustomer(customerId);
      return res.status(200).json(customerOrders);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }

  /**
   * @description Get info about order
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} order short details
   */
  static async GetOrderShortDetails(req, res) {
    try {
      const orderId = req.params.order_id;
      const orderInfo = await OrderService.GetOrderShortDetails(orderId);
      return res.status(200).json(orderInfo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: 'Ooops something went wrong'
      });
    }
  }
}

export default OrderController;
