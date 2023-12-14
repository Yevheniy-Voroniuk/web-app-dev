import { DataTypes, Sequelize } from 'sequelize';

const NAME = process.env.DATABASE_NAME;
const USERNAME = process.env.DATABASE_USERNAME;
const PASSWORD = process.env.DATABASE_PASSWORD;
const HOST = process.env.DATABASE_HOST;
const PORT = process.env.DATABASE_PORT;

const sequelize = new Sequelize(NAME, USERNAME, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
  port: PORT,
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error('Failed to connect to database:', error);
  }
  try {
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error('Database synchronization failed:', error);
  }
})();

export { DataTypes, sequelize };