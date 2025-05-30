// const { Sequelize } = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
// {
//   host: 'db',
//   port: 3306, 
//   dialect: 'mysql',
// });

// module.exports = sequelize;

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
{
  host: 'db',
  port: 3306, 
  dialect: 'mysql',
});

module.exports = sequelize;