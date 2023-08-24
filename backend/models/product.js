const Sequelize = require('sequelize');
const sequelize = require('./index');

const Product = sequelize.define('Product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Product;
