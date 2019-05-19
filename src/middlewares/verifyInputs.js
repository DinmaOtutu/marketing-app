import errorValidationHandler from './errorHandler';

const verifyUserInput = {
  exampleRequestBody: (req, res, next) => {
    req.check('female', 'number of female number is required').trim().notEmpty();
    req.check('male', ' number of male is required').trim().notEmpty();
    
    errorValidationHandler(req, res, next);
  },
};

export default verifyUserInput;
