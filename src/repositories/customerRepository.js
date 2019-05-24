/* eslint-disable import/no-cycle */
import sequelize from '../bin/www';

/**
 * @description Customer repository class
 * @class CustomerRepository
 */
class CustomerRepository {
  /**
     * @description register a customer
     * @param {Object} customer - customer to be created
     * @returns {Number} returns a newly created customer ID
     */
  static async RegisterCustomer(customer) {
    try {
      const response = await sequelize.query('CALL customer_add(:name, :email, :password);', {
        replacements: {
          name: customer.name,
          email: customer.email,
          password: customer.password
        },
        type: sequelize.QueryTypes.INSERT
      });
      return response[0]['LAST_INSERT_ID()'];
    } catch (error) {
      return error;
    }
  }

  /**
     * @description check for existing user by email
     * @param {Object} email - get user by email
     * @returns {Object} returns a response
     */
  static async LoginCustomer(email) {
    try {
      const getExistingUser = await sequelize.query('CALL customer_get_login_info(:email)', {
        replacements: {
          email
        },
        type: sequelize.QueryTypes.SELECT
      });
      return getExistingUser[0]['0'];
    } catch (error) {
      return error;
    }
  }

  /**
     * @description get a single customer by Id
     * @param {Number} customerId
     * @returns {Object} returns a single customer with this Id from the datastore
     */
  static async GetCustomerById(customerId) {
    try {
      const response = await sequelize.query('CALL customer_get_customer(:id);', {
        replacements: {
          id: customerId
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response[0]['0'];
    } catch (error) {
      return error;
    }
  }
}

export default CustomerRepository;
