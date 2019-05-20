/* eslint-disable import/no-cycle */
import dotenv from 'dotenv';
import CustomerService from '../services/customerService';
import helper from '../utils/helper';

dotenv.config();
/**
 * @description Customer controller class
 * @class CustomerController
 */
class CustomerController {
  /**
   * @description Register a customer and return the customer with a token
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async RegisterCustomer(req, res) {
    const { name, email, password } = req.body;
    const customerBody = {
      name,
      email,
      password
    };
    const customerId = await CustomerService.RegisterCustomer(customerBody);
    if (customerId.parent) {
      if (customerId.parent.errno === 1062) {
        return res.status(409).json({ error: 'user already exist' });
      }
      return res.status(500).json({ error: 'Ooops Something went wrong' });
    }

    const customer = await CustomerService.GetCustomerById(customerId);
    const payload = {
      email: customer.email,
      name: customer.name,
      id: customer.customer_id
    };
    return res.status(200).json(
      {
        customer: {
          schema: customer
        },
        accessToken: `Bearer ${helper.generateToken('UserSignUp', payload)}`,
        expires_in: process.env.TOKEN_EXPIRES_IN
      }
    );
  }
}

export default CustomerController;
