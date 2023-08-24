const Sequelize = require('sequelize');
const sequelize = require('./index');

const Order = sequelize.define('Order', {
  customerName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  storeName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  deliveryDate: {
    type: Sequelize.DATE,
  },
  priority: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Order;
