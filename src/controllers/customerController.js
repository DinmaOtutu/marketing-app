/* eslint-disable camelcase */
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
      email: email.toLowerCase(),
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

  /**
   * @description Login with email and password and return the customer with a token if successful
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async LoginCustomer(req, res) {
    const { email, password } = req.body;
    const resp = await CustomerService.LoginCustomer(email, password);
    if (resp.match) {
      const customer = await CustomerService.GetCustomerById(resp.id);
      const payload = {
        email: customer.email,
        name: customer.name,
        id: customer.customer_id
      };
      return res.status(200).json({
        customer: {
          schema: customer
        },
        accessToken: `Bearer ${helper.generateToken('UserLogin', payload)}`,
        expires_in: process.env.TOKEN_EXPIRES_IN
      });
    }
    return res.status(401).json({
      message: 'Invalid Credentials'
    });
  }

  /**
   * @description Get a single customer
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async getSingleCustomer(req, res) {
    try {
      const userDatails = req.userData;
      const resp = await CustomerService.GetCustomerById(userDatails.id);
      if (!resp) {
        return res.status(404).json({
          message: 'User does not exist',
        });
      }
      return res.status(200).json({
        customer: {
          schema: resp
        },
      });
    } catch (error) {
      return res.status(401).json({
        message: error.message
      });
    }
  }

  /**
   * @description Register a customer and return the customer with a token
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async UpdateCustomer(req, res) {
    try {
      const userDatails = req.userData;
      const { id } = userDatails;
      const {
        address_1, address_2, city, region, country,
        postal_code, shipping_region_id
      } = req.body;
      const customerBody = {
        customerId: id,
        address_1,
        address_2,
        city,
        region,
        country,
        postal_code,
        shipping_region_id
      };
      await CustomerService.updateCustomer(customerBody);
      const customer = await CustomerService.GetCustomerById(userDatails.id);
      return res.status(200).json(
        {
          customer: {
            schema: customer
          }
        }
      );
    } catch (error) {
      return res.status(500).json({
        error: error.message
      });
    }
  }

  /**
   * @description Register a customer and return the customer with a token
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async UpdateCustomerAccount(req, res) {
    try {
      const userDatails = req.userData;
      const { id } = userDatails;
      const {
        name, email,
        password,
        day_phone,
        eve_phone,
        mob_phone,
      } = req.body;
      const customerBody = {
        customerId: id,
        name,
        email,
        password,
        day_phone,
        eve_phone,
        mob_phone,
      };
      await CustomerService.updateCustomerAccount(customerBody);
      const customer = await CustomerService.GetCustomerById(userDatails.id);
      return res.status(200).json(
        {
          customer: {
            schema: customer
          }
        }
      );
    } catch (error) {
      return res.status(500).json({
        error: error.message
      });
    }
  }

  /**
   * @description Register a customer and return the customer with a token
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async updateCustomerCreditCard(req, res) {
    try {
      const userDatails = req.userData;
      const { id } = userDatails;
      const {
        credit_card
      } = req.body;
      const customerBody = {
        customerId: id,
        credit_card
      };
      await CustomerService.updateCustomerCreditCard(customerBody);
      const customer = await CustomerService.GetCustomerById(userDatails.id);
      return res.status(200).json(
        {
          customer: {
            schema: customer
          }
        }
      );
    } catch (error) {
      return res.status(500).json({
        error: error.message
      });
    }
  }
}

export default CustomerController;
