import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SALT_WORK_FACTOR = bcrypt.genSaltSync(5);
const helper = {
  // Hash password with bcrypt
  hashPassword: async (plaintextPassword, saltFactor = SALT_WORK_FACTOR) => {
    const hash = await bcrypt.hashSync(plaintextPassword, saltFactor);
    return hash;
  },
  // compare hashed password
  comparePassword: async (plaintextPassword, hashPassword) => {
    const compare = await bcrypt.compareSync(plaintextPassword, `${hashPassword}`);
    return compare;
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
