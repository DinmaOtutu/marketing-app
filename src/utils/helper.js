import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SALT_WORK_FACTOR = 10;
const helper = {
  // Hash password with bcrypt
  hashPassword: async (plaintextPassword, saltFactor = SALT_WORK_FACTOR) => {
    const hash = await bcrypt.hash(plaintextPassword, saltFactor);
    return hash;
  },
  // generate token
  generateToken: (type, payload, expiry = process.env.TOKEN_EXPIRES_IN) => {
    payload.type = type;
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: expiry
    });
  }
};

export default helper;
