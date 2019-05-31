/* eslint-disable space-infix-ops */
import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  // eslint-disable-next-line no-undef
  const bearerHeader = req.headers['user-key'];
  if (!bearerHeader) {
    return res.status(401).json({
      error: {
        code: 'AUT_01',
        message: 'Authorization code is empty.',
        field: 'API-KEY'
      }
    });
  }
  const token = bearerHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, userData) => {
    if (err) {
      return res.status(401).json({
        error: {
          code: 'AUT_02',
          message: 'The apikey is invalid.',
          field: 'API-KEY'
        }
      });
    }
    req.userData = userData;
    next();
  });
};

export default verifyToken;
