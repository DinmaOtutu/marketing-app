// change to validaionErrorHandler
const validator = {
  bodyHandler: (req, res, next) => {
    const error = req.validationErrors();
    const validationErrors = [];
    if (error) {
      error.map(err => validationErrors.push(err.param));
      const field = validationErrors.join(',');
      const message = validationErrors.length > 1 ? `The fields ${field} are required` : `The field ${field} is required`;
      return res.status(400).json({
        error: {
          code: 'USR_02',
          message,
          field,
          status: '500'
        }
      });
    }
    next();
  },
  urlHandler: (req, res, next) => {
    const error = req.validationErrors();
    if (error) {
      return res.status(404).json({
        message: 'Endpoint not found.'
      });
    }
    next();
  }
};

export default validator;
