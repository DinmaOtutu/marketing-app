// eslint-disable-next-line import/no-cycle
import ProductsRepository from '../repositories/productRepository';

/**
 * @description Product service class
 * @class ProductsService
 */
class ProductsService {
  /**
     * @description get a Product with ProductId
     * @param {NUMBER} productId - product ID
     * @returns {Object} returns a product via productId
     */
  static async GetProductById(productId) {
    const response = await ProductsRepository.GetProductById(productId);
    return response;
  }

  /**
     * @description get a Product with categoryId
     * @param {NUMBER} categoryId - category ID
     * @param {NUMBER} page - page number
     * @param {NUMBER} limit - limit
     * @param {NUMBER} descriptionLength - descriptionLength
     * @returns {Object} returns a product via categoryId
     */
  static async GetProductByCategoryId(categoryId, page, limit, descriptionLength) {
    const response = await ProductsRepository.GetProductByCategoryId(categoryId, page, limit, descriptionLength);
    return response;
  }

  /**
     * @description get a Product with categoryId
     * @param {NUMBER} productId - product ID
     * @returns {Object} returns a product via categoryId
     */
  static async GetProductDetailsByProductId(productId) {
    const response = await ProductsRepository.GetProductDetailsByProductId(productId);
    return response;
  }

  /**
     * @description get a Product Location with productId
     * @param {NUMBER} productId - product ID
     * @returns {Object} returns a product Location via productId
     */
  static async GetProductLocationByProductId(productId) {
    const response = await ProductsRepository.GetProductLocationByProductId(productId);
    return response;
  }

  /**
     * @description get a Product Review with productId
     * @param {NUMBER} productId - product ID
     * @returns {Object} returns a product Review via productId
     */
  static async GetProductReviewByProductId(productId) {
    const response = await ProductsRepository.GetProductReviewByProductId(productId);
    return response;
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
    const response = await ProductsRepository.ProductSearch(searchString, inAllWords, page, limit, descriptionLength);
    return response;
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
    const response = await ProductsRepository.PostProductReviews(productId, customerId, review, rating);
    return response;
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
    const response = await ProductsRepository.GetAllProducts(descriptionLength, limit, page);
    return response;
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
    const response = await ProductsRepository.GetProductsByDepartmentId(departmentId, descriptionLength, limit, page);
    return response;
  }
}

export default ProductsService;
