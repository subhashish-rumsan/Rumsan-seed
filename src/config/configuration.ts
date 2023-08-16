export default () => ({
  STATUS: process.env.NODE_ENV,
  DEV_PORT: process.env.DEV_PORT,
  PROD_PORT: process.env.PROD_PORT,
  API_VERSION: process.env.API_VERSION,
});
