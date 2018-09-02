import dotenv from 'dotenv';

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3001,
  DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/graphql-books',
};
