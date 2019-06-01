/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import dotenv from 'dotenv';
import StripeService from '../services/StripeService';

dotenv.config();
/**
 * @description Customer controller class
 * @class CustomerController
 */
class StripeController {
  /**
   * @description Webhook response from stripe
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async stripeWebhook(req, res) {
    try {
      res.status(200);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }

  /**
   * @description Webhook response from stripe
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async payWithStripe(req, res) {
    try {
      const userDetails = req.userData;
      const {
        token, order_id, description, amount,
      } = req.body;
      const currency = 'usd';
      const option = {
        token, order_id, description, amount, currency
      };
      const response = await StripeService.PayWithStripe(option, userDetails);
      return res.status(201).json({
        status: response.status,
        response,

      });
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }
}

export default StripeController;
