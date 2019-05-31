/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import CustomerRepository from '../repositories/customerRepository';
import helper from '../utils/helper';

/**
 * @description Customer service class
 * @class CustomerService
 */
class CustomerService {
  /**
     * @description register a customer
     * @param {Object} customer - customer to be created
     * @returns {Number} returns a newly created customer ID from the repository
     */
  static async RegisterCustomer(customer) {
    try {
      const customerData = {
        name: customer.name,
        email: customer.email,
        password: await helper.hashPassword(customer.password)
      };
      const customerId = await CustomerRepository.RegisterCustomer(customerData);
      return customerId;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description get a single customer by Id
     * @param {Number} id
     * @returns {Object} returns a single customer with this Id from the repository
     */
  static async GetCustomerById(id) {
    try {
      const customer = await CustomerRepository.GetCustomerById(id);
      if (customer) {
        return customer;
      }
      throw new Error('User does not exist');
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description login in a customer
     * @param {Object} email login details
     * @param {Object} password details from database
     * @returns {Object} customer login details
     */
  static async LoginCustomer(email, password) {
    try {
      const res = await CustomerRepository.LoginCustomer(email);
      const match = await helper.comparePassword(password, res.password);
      const response = {
        match,
        id: res.customer_id
      };
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description register a customer
     * @param {Object} customerBody - customer to be created
     * @param {Number} customerId - customer to be created
     * @returns {Object} returns a newly created customer ID from the repository
     */
  static async updateCustomer(customerBody) {
    try {
      const {
        address_1, address_2,
        city,
        region,
        country,
        postal_code,
        customerId,
        shipping_region_id
      } = customerBody;
      await CustomerRepository.updateCustomer({
        customerId,
        address_1,
        address_2,
        city,
        region,
        country,
        postal_code,
        shipping_region_id
      });
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description register a customer
     * @param {Object} customerBody - customer to be created
     * @param {Number} customerId - customer to be created
     * @returns {Object} returns a newly created customer ID from the repository
     */
  static async updateCustomerAccount(customerBody) {
    try {
      const {
        name, email,
        password,
        day_phone,
        eve_phone,
        mob_phone,
        customerId,
      } = customerBody;
      await CustomerRepository.updateCustomerAccount({
        customerId,
        name,
        email,
        password,
        day_phone,
        eve_phone,
        mob_phone,
      });
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description register a customer
     * @param {Object} customerBody - customer to be created
     * @param {Number} customerId - customer to be created
     * @returns {Object} returns a newly created customer ID from the repository
     */
  static async updateCustomerCreditCard(customerBody) {
    try {
      const {
        credit_card,
        customerId,
      } = customerBody;
      await CustomerRepository.updateCustomerCreditCard({
        customerId,
        credit_card
      });
    } catch (error) {
      throw error;
    }
  }
}
export default CustomerService;
