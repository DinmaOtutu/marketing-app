import validator from './errorHandler';

const verifyUserInput = {
  registerCustomerRequestBody: (req, res, next) => {
    req.check('name', 'name is required').trim().notEmpty();
    req.check('email', 'email is required').trim().notEmpty();
    req.check('password', 'password is required').trim().notEmpty();
    req.check('email', 'invalid email type').isEmail();
    validator.bodyHandler(req, res, next);
  },
  loginCustomerRequestBody: (req, res, next) => {
    req.check('email', 'email is required').trim().notEmpty();
    req.check('password', 'password is required').trim().notEmpty();
    validator.bodyHandler(req, res, next);
  },
  createOrderRequestBody: (req, res, next) => {
    req.check('cart_id', 'cart_id is required').trim().notEmpty();
    req.check('shipping_id', 'shipping_id must be numeric').trim().isNumeric();
    req.check('tax_id', 'tax_id must be numeric').trim().isNumeric();
    validator.bodyHandler(req, res, next);
  },
  getOrderUrl: (req, res, next) => {
    req.check('order_id', 'order_id is required').trim().isNumeric();
    validator.urlHandler(req, res, next);
  },
  addProductRequestBody: (req, res, next) => {
    req.check('cart_id', 'cart_id is required').trim().notEmpty();
    req.check('product_id', 'product_id must be numeric').trim().isNumeric();
    req.check('attributes', 'attributes is required').trim().notEmpty();
    validator.bodyHandler(req, res, next);
  },
  getCartId: (req, res, next) => {
    req.check('cart_id', 'cart_id is required').trim().notEmpty();
    validator.bodyHandler(req, res, next);
  },
  updateCartByItem: (req, res, next) => {
    req.check('item_id', 'item_id is required').trim().isNumeric();
    req.check('quantity', 'quantity is required').trim().isNumeric();
    validator.bodyHandler(req, res, next);
  },
  getItemId: (req, res, next) => {
    req.check('item_id', 'item_id is required').trim().isNumeric();
    validator.bodyHandler(req, res, next);
  },
  getShippingRegionId: (req, res, next) => {
    req.check('shipping_region_id', 'shipping_region_id is required').trim().isNumeric();
    validator.bodyHandler(req, res, next);
  }
};

export default verifyUserInput;
