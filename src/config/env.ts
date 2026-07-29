import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const env = {
  nodeEnv: process.env.NODE_ENV,
  database_url:process.env.DATABASE_URL,
  email_user:process.env.EMAIL_USER,
  email_pass:process.env.EMAIL_PASS,
  jwt_secret:process.env.JWT_SECRET
};

export default env;