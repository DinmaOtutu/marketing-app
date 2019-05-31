
// eslint-disable-next-line import/no-cycle
import ProductsService from '../services/productsServices';


/**
 * @description Products controller class
 * @class ProductsController
 */
class ProductsController {
  /**
     * @description get product by product id
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns product object
     */
  static async GetProductById(req, res) {
    const { productId } = req.params;
    const response = await ProductsService.GetProductById(Number(productId));
    if (response.length !== 0) {
      return res.status(200).json(response);
    }
    return res.status(404).json({
      error: 'Product not found.'
    });
  }

  /**
     * @description get product by category id
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns product object
     */
  static async GetProductByCategoryId(req, res) {
    const { categoryId } = req.params;
    const {
      limit,
      descriptionLength
    } = req.query;

    let {
      page,
    } = req.query;

    if (page === undefined) {
      page = 1;
    }
    const response = await ProductsService.GetProductByCategoryId(Number(categoryId), Number(page), Number(limit), Number(descriptionLength));
    if (response.length !== 0) {
      return res.status(200).json(response);
    }
    return res.status(404).json({
      error: 'Product not found.'
    });
  }

  /**
     * @description get product details by product id
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns product details object
     */
  static async GetProductDetailsByProductId(req, res) {
    const { productId } = req.params;
    const response = await ProductsService.GetProductDetailsByProductId(Number(productId));
    if (response.length !== 0) {
      return res.status(200).json(response);
    }
    return res.status(404).json({
      error: 'Product does not exit.'
    });
  }

  /**
     * @description get product location by product id
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns product location object
     */
  static async GetProductLocationByProductId(req, res) {
    const { productId } = req.params;
    const response = await ProductsService.GetProductLocationByProductId(Number(productId));
    if (response.length !== 0) {
      return res.status(200).json(response);
    }
    return res.status(404).json({
      error: 'Product does not exit.'
    });
  }

  /**
     * @description get product Review by product id
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns product object
     */
  static async GetProductReviewByProductId(req, res) {
    const { productId } = req.params;
    const response = await ProductsService.GetProductReviewByProductId(Number(productId));
    if (response.length !== 0) {
      return res.status(200).json(response);
    }
    return res.status(404).json({
      error: 'This product is yet to be reviewed.'
    });
  }

  /**
     * @description Search for a product by category id
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns product object
     */
  static async ProductSearch(req, res) {
    const {
      searchString,
      inAllWords,
    } = req.query;

    let {
      page,
      limit,
      descriptionLength
    } = req.query;


    if (inAllWords.toLowerCase().trim() !== 'on' && inAllWords.toLowerCase().trim() !== 'off' && inAllWords.toLowerCase().trim() !== '') {
      return res.status(400).json({
        error: 'This field can either be On, Off or empty'
      });
    }
    if (page === undefined || limit === undefined || descriptionLength === undefined) {
      page = 1;
      limit = 20;
      descriptionLength = 200;
    }
    const response = await ProductsService.ProductSearch(
      searchString, inAllWords.toLowerCase(), Number(page), Number(limit), Number(descriptionLength)
    );
    if (response.length !== 0) {
      return res.status(200).json(response);
    }
    return res.status(404).json({
      error: 'Product not found.'
    });
  }

  /**
     * @description add a review to a product
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns review object
     */
  static async PostProductReviews(req, res) {
    const {
      review,
      rating
    } = req.body;
    const { productId } = req.params;
    const customerId = req.userData.id;
    const reviewObject = {
      review: String(review),
      rating: Number(rating),
      productId: Number(productId),
      customerId: Number(customerId)
    };
    if (reviewObject.rating < 0 || reviewObject.rating > 5) {
      return res.status(400).json({
        error: 'rating must be between 1 and 5'
      });
    }
    await ProductsService.PostProductReviews(reviewObject.productId, reviewObject.customerId, reviewObject.review, reviewObject.rating);

    const response = await ProductsService.GetProductReviewByProductId(productId);
    return res.status(201).json(response);
  }

  /**
     * @description get all products in the application
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns products object
     */
  static async GetAllProducts(req, res) {
    const {
      limit,
      page
    } = req.query;

    let { descriptionLength } = req.query;

    if (descriptionLength === undefined) {
      descriptionLength = '200';
    }

    const response = await ProductsService.GetAllProducts(descriptionLength, limit, page);
    return res.status(200).json(response);
  }

  /**
     * @description get all products in the application
     * @param {Object} req - Http Request object
     * @param {Object} res - Http Request object
     * @returns {Object} returns products object
     */
  static async GetProductsByDepartmentId(req, res) {
    const {
      limit,
      descriptionLength
    } = req.query;

    const { departmentId } = req.params;

    let { page } = req.query;

    if (page === undefined) {
      page = 1;
    }

    const response = await ProductsService.GetProductsByDepartmentId(departmentId, descriptionLength, limit, page);
    return res.status(200).json(response);
  }
}

export default ProductsController;
