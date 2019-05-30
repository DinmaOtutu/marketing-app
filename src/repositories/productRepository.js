// eslint-disable-next-line import/no-cycle
import sequelize from '../bin/www';

/**
 * @description Products repository class
 * @class ProductsRepository
 */
class ProductsRepository {
  /**
     * @description get product by ID
     * @param {NUMBER} productId - product ID
     * @returns {Object} returns product via Id
     */
  static async GetProductById(productId) {
    try {
      const response = await sequelize.query('CALL catalog_get_product_info(:id)', {
        replacements: {
          id: productId
        }
      }, {
        type: sequelize.QueryTypes.SELECT
      });
      return response[0];
    } catch (error) {
      return error;
    }
  }

  /**
     * @description get a Product with categoryId
     * @param {NUMBER} categoryId - category ID
     * @param {NUMBER} page - page
     * @param {NUMBER} limit - limit
     * @param {NUMBER} descriptionLength - descriptionLength
     * @returns {Object} returns a product category via categoryId
     */
  static async GetProductByCategoryId(categoryId, page, limit, descriptionLength) {
    try {
      const response = await sequelize.query('CALL catalog_get_products_in_category(:inCategoryId,:inShortProductDescriptionLength,:inProductsPerPage,:inStartItem)', {
        replacements: {
          inCategoryId: categoryId,
          inShortProductDescriptionLength: descriptionLength,
          inProductsPerPage: limit,
          inStartItem: page,
        }
      }, {
        type: sequelize.QueryTypes.SELECT,
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  /**
     * @description get a Product Details with productId
     * @param {NUMBER} productId - product ID
     * @returns {Object} returns a product details via productId
     */
  static async GetProductDetailsByProductId(productId) {
    try {
      const response = await sequelize.query('CALL catalog_get_product_details(:id)', {
        replacements: {
          id: productId
        }
      }, {
        type: sequelize.QueryTypes.SELECT,
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  /**
     * @description get a Product location with productId
     * @param {NUMBER} productId - product ID
     * @returns {Object} returns a product location via productId
     */
  static async GetProductLocationByProductId(productId) {
    try {
      const response = await sequelize.query('CALL catalog_get_product_locations(:id)', {
        replacements: {
          id: productId
        }
      }, {
        type: sequelize.QueryTypes.SELECT,
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  /**
     * @description get a Product reviews with productId
     * @param {NUMBER} productId - product ID
     * @returns {Object} returns a product reviews via productId
     */
  static async GetProductReviewByProductId(productId) {
    try {
      const response = await sequelize.query('CALL catalog_get_product_reviews(:inProductId)', {
        replacements: {
          inProductId: productId
        }
      }, {
        type: sequelize.QueryTypes.SELECT,
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  /**
     * @description search for product
     * @param {STRING} searchString - search string
     * @param {STRING} inAllWords - all words attributes
     * @param {NUMBER} page - page number
     * @param {NUMBER} limit - number
     * @param {STRING} descriptionLength - description length
     * @returns {Object} returns an object
     */
  static async ProductSearch(searchString, inAllWords, page, limit, descriptionLength) {
    try {
      const response = await sequelize.query('CALL catalog_search(:inSearchString,:inAllWords,:inShortProductDescriptionLength,:inProductsPerPage, :inStartItem)', {
        replacements: {
          inSearchString: searchString,
          inAllWords,
          inShortProductDescriptionLength: descriptionLength,
          inProductsPerPage: limit,
          inStartItem: page,
          
        }
      }, {
        type: sequelize.QueryTypes.SELECT,
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  /**
     * @description adds review to a product
     * @param {NUMBER} productId - product id
     * @param {NUMBER} customerId - cutomer id
     * @param {STRING} review - product review
     * @param {NUMBER} rating - number
     * @param {STRING} descriptionLength - description length
     * @returns {Object} returns an object
     */
  static async PostProductReviews(productId, customerId, review, rating) {
    try {
      const response = await sequelize.query('CALL catalog_create_product_review(:customerId,:productId,:review,:rating)', {
        replacements: {
          customerId,
          productId,
          review,
          rating
        }
      }, {
        type: sequelize.QueryTypes.INSERT
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  /**
     * @description get all products
     * @param {STRING} descriptionLength - description length
     * @param {NUMBER} limit - number of item on a page
     * @param {NUMBER} page - page number
     * length
     * @returns {Object} returns an object
     */
  static async GetAllProducts(descriptionLength, limit, page) {
    try {
      const response = await sequelize.query('CALL catalog_get_products(:inPage, :inCountPerPage, :inDescriptionLenth);', {
        replacements: {
          inPage: page,
          inCountPerPage: limit,
          inDescriptionLenth: descriptionLength
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  /**
     * @description get all products
     * @param {NUMBER} departmentId - department Id
     * @param {STRING} descriptionLength - description length
     * @param {NUMBER} limit - number of item on a page
     * @param {NUMBER} page - page number
     * length
     * @returns {Object} returns an object
     */
  static async GetProductsByDepartmentId(departmentId, descriptionLength, limit, page) {
    try {
      const response = await sequelize.query('CALL catalog_get_products_on_department(:inDepartmentId, :inShortProductDescriptionLength, :inProductsPerPage, :inStartItem);', {
        replacements: {
          inDepartmentId: departmentId,
          inShortProductDescriptionLength: descriptionLength,
          inProductsPerPage: limit,
          inStartItem: page
        },
        type: sequelize.QueryTypes.SELECT
      });
      return response[0];
    } catch (error) {
      return error;
    }
  }
}

// catalog_get_products_on_department

export default ProductsRepository;
