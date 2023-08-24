const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customerName: {
    field: 'customer_name',
    type: DataTypes.STRING,
    allowNull: false,
  },
  storeName: {
    field: 'store_name',
    type: DataTypes.STRING,
    allowNull: false,
  },
  deliveryDate: {
    field: 'delivery_date',
    type: DataTypes.DATE,
  },
  priority: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
  },
});

module.exports = Order;
