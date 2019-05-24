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
    const customerData = {
      name: customer.name,
      email: customer.email,
      password: await helper.hashPassword(customer.password)
    };
    const customerId = await CustomerRepository.RegisterCustomer(customerData);
    return customerId;
  }

  /**
     * @description get a single customer by Id
     * @param {Number} id
     * @returns {Object} returns a single customer with this Id from the repository
     */
  static async GetCustomerById(id) {
    const customer = await CustomerRepository.GetCustomerById(id);
    if (customer) {
      return customer;
    }
    return ('no customer');
  }

  /**
     * @description login in a customer
     * @param {Object} email login details
     * @param {Object} password details from database
     * @returns {Object} customer login details
     */
  static async LoginCustomer(email, password) {
    const res = await CustomerRepository.LoginCustomer(email);
    const match = await helper.comparePassword(password, res.password);
    const response = {
      match,
      id: res.customer_id
    };
    return response;
  }
}

export default CustomerService;
