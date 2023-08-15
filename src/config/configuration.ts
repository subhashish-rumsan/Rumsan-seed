export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
});
