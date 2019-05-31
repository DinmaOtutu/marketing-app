/* eslint-disable import/no-cycle */
import OrderRepository from '../repositories/orderRepository';

/**
 * @description Order service class
 * @class OrderService
 */
class OrderService {
  /**
     * @description Create an order
     * @param {Object} order - order to be created
     * @returns {Number} returns a newly created order ID from the repository
     */
  static async CreateOrder(order) {
    const orderId = await OrderRepository.CreateOrder(order);
    return orderId[0].orderId;
  }

  /**
     * @description Get info about order
     * @param {Number} orderId - order Id
     * @returns {Object} returns information of the order with this ID from the repository
     */
  static async GetOrderInfo(orderId) {
    const result = await OrderRepository.GetOrderInfo(orderId);
    const orderInfo = Object.values(result[0]);
    return orderInfo;
  }

  /**
     * @description Get orders by Customer
     * @param {Number} customerId - customer Id
     * @returns {Object} returns orders for customer with this ID from the repository
     */
  static async GetOrdersByCustomer(customerId) {
    const result = await OrderRepository.GetOrdersByCustomer(customerId);
    const customerOrders = Object.values(result[0]);
    return customerOrders;
  }

  /**
     * @description Get info about order
     * @param {Number} orderId - order Id
     * @returns {Object} returns short details of the order with this ID from the repository
     */
  static async GetOrderShortDetails(orderId) {
    const result = await OrderRepository.GetOrderShortDetails(orderId);
    return result[0]['0'];
  }
}

export default OrderService;
