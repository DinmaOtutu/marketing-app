/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import sequelize from '../bin/www';

/**
 * @description Customer repository class
 * @class CustomerRepository
 */
class CategoryRepository {
  /**
     * @description register a customer
     * @param {Object} customer - customer to be created
     * @returns {Number} returns a newly created customer ID
     */
  static async GetAllCategories() {
    try {
      const response = await sequelize.query('CALL catalog_get_categories();', {

        type: sequelize.QueryTypes.SELECT
      });
      return response[0]['0'];
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description register a customer
     * @param {Object} category_id - customer to be created
     * @returns {Number} returns a newly created customer ID
     */
  static async GetACategory(category_id) {
    try {
      const response = await sequelize.query('CALL catalog_get_category_details(:category_id);', {
        replacements: {
          category_id
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response[0]['0'];
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description register a customer
     * @param {Object} product_id - customer to be created
     * @returns {Number} returns a newly created customer ID
     */
  static async GetCategoryOfProduct(product_id) {
    try {
      const response = await sequelize.query('CALL catalog_get_categories_for_product(:product_id);', {
        replacements: {
          product_id
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response[0]['0'];
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description register a customer
     * @param {Object} department_id - customer to be created
     * @returns {Number} returns a newly created customer ID
     */
  static async GetCategoryOfDepartment(department_id) {
    try {
      const response = await sequelize.query('CALL catalog_get_department_categories(:department_id);', {
        replacements: {
          department_id
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response[0]['0'];
    } catch (error) {
      throw error;
    }
  }
}

export default CategoryRepository;
