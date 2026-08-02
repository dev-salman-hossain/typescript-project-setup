import bcrypt from "bcrypt";

const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS) || 12;

// Hash a plain text password
export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

// Compare plain text password with hashed password
export const comparePassword = async (
  plain: string,
  hashed: string
): Promise<boolean> => {
  return bcrypt.compare(plain, hashed);
};