import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return {
        host: process.env.PROD_DATABASE_USER,
        port: process.env.PROD_DATABASE_PORT || 8000,
      };
    case 'staging':
      return {
        host: process.env.STAGING_DATABASE_USER,
        port: process.env.STAGING_DATABASE_PORT || 8000,
      };
    case 'development':
    default:
      return {
        host: process.env.DB_DEVELOPMENT_HOST,
        dbName: process.env.DB_DEVELOPMENT_DATABASE_NAME,
        dbPassword: process.env.DB_DEVELOPMENT_PASSWORD,
        dbUserName: process.env.DB_DEVELOPMENT_USER_NAME,
        port: process.env.DEV_DATABASE_PORT || 8000,
      };
  }
});
