/* eslint-disable camelcase */
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const SECKEY = process.env.STRIPE_SEC_KEY;

const stripe = Stripe(SECKEY);
/**
 * @description Stripe service class
 * @class StripeService
 */
class StripeService {
  /**
     * @description Make payment with stripe
     * @param {Object} option
     * @param {Object} userDetails
     * @returns {Object} returns info from stripe
     */
  static async PayWithStripe(option, userDetails) {
    try {
      const customers = await stripe.customers.create({
        email: userDetails.email,
      });
      const source = await stripe.customers.createSource(customers.id, {
        source: 'tok_visa',
      });
      const { customer } = source;
      const {
        token, order_id, description, amount, currency,
      } = option;
      const response = await stripe.charges.create({
        token, order_id, description, amount, currency, customer
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
export default StripeService;
