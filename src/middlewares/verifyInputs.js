import errorValidationHandler from './errorHandler';

const verifyUserInput = {
  registerCustomerRequestBody: (req, res, next) => {
    req.check('name', 'name is required').trim().notEmpty();
    req.check('email', 'email is required').trim().notEmpty();
    req.check('password', 'password is required').trim().notEmpty();
    req.check('email', 'invalid email type').isEmail();
    errorValidationHandler(req, res, next);
  },
  loginCustomerRequestBody: (req, res, next) => {
    req.check('email', 'email is required').trim().notEmpty();
    req.check('password', 'password is required').trim().notEmpty();
    errorValidationHandler(req, res, next);
  }
};

export default verifyUserInput;
