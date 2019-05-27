/* eslint-disable camelcase */
/* eslint-disable import/no-cycle */
import dotenv from 'dotenv';
import CategoryService from '../services/categoryService';

dotenv.config();
/**
 * @description Customer controller class
 * @class CustomerController
 */
class CategoryController {
  /**
   * @description Get a single customer
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async getAllCategories(req, res) {
    try {
      // const { order, page, limit } = req.query;
      const response = await CategoryService.GetAllCategories();
      if (!response) {
        return res.status(404).json({
          message: 'No categories yet',
        });
      }
      return res.status(200).json({
        rows: [response]

      });
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }

  /**
   * @description Get a single customer
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async GetACategory(req, res) {
    try {
      const { categoryId } = req.params;
      const option = {
        categoryId
      };
      const resp = await CategoryService.GetAllCategories(option);
      if (!resp) {
        return res.status(404).json({
          message: 'No categories yet',
        });
      }
      return res.status(200).json(resp);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }

  /**
   * @description Get a single customer
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async GetCategoryOfProduct(req, res) {
    try {
      const { productId } = req.params;
      const option = {
        productId
      };
      const resp = await CategoryService.GetCategoryOfProduct(option);
      if (!resp) {
        return res.status(404).json({
          message: 'No categories yet',
        });
      }
      return res.status(200).json(resp);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }

  /**
   * @description Get a single customer
   * @param {Object} req - Http Request object
   * @param {Object} res - Http Response object
   * @returns {Object} customer with a token
   */
  static async GetCategoryOfDepartment(req, res) {
    try {
      const { departmentId } = req.params;
      const option = {
        departmentId
      };
      const resp = await CategoryService.GetCategoryOfDepartment(option);
      if (!resp) {
        return res.status(404).json({
          message: 'No department yet',
        });
      }
      return res.status(200).json(resp);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  }
}

export default CategoryController;
