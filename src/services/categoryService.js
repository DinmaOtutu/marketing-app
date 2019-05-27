/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import CategoryRepository from '../repositories/categoryRepository';

/**
 * @description Customer service class
 * @class CustomerService
 */
class CategoryService {
  /**
     * @description get a single customer by Id
     * @param {Object} option
     * @returns {Object} returns a single customer with this Id from the repository
     */
  static async GetAllCategories() {
    try {
      const category = await CategoryRepository.GetAllCategories();
      if (category) {
        return category;
      }
      throw new Error('No categories yet');
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description get a single customer by Id
     * @param {Object} option
     * @returns {Object} returns a single customer with this Id from the repository
     */
  static async GetACategory(option) {
    try {
      const { categoryId } = option;
      const category = await CategoryRepository.GetACategory(categoryId);
      if (category) {
        return category;
      }
      throw new Error('No categories yet');
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description get a single customer by Id
     * @param {Object} option
     * @returns {Object} returns a single customer with this Id from the repository
     */
  static async GetCategoryOfProduct(option) {
    try {
      const { productId } = option;
      const product = await CategoryRepository.GetCategoryOfProduct(productId);
      if (product) {
        return product;
      }
      throw new Error('No categories yet');
    } catch (error) {
      throw error;
    }
  }

  /**
     * @description get a single customer by Id
     * @param {Object} option
     * @returns {Object} returns a single customer with this Id from the repository
     */
  static async GetCategoryOfDepartment(option) {
    try {
      const { departmentId } = option;
      const product = await CategoryRepository.GetCategoryOfDepartment(departmentId);
      if (product) {
        return product;
      }
      throw new Error('No categories yet');
    } catch (error) {
      throw error;
    }
  }
}
export default CategoryService;
