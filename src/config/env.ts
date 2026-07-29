import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

interface EnvConfig {
  nodeEnv: string | undefined;
  database_url: string | undefined;
  email_user: string | undefined;
  email_pass: string | undefined;
  jwt_secret: string | undefined;
}

const env: EnvConfig = {
  nodeEnv: process.env.NODE_ENV,
  database_url:process.env.DATABASE_URL,
  email_user:process.env.EMAIL_USER,
  email_pass:process.env.EMAIL_PASS,
  jwt_secret:process.env.JWT_SECRET
};

export default env;