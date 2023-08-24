const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TransactionLog = sequelize.define('TransactionLog', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  transactionTime: {
    field: 'transaction_time',
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  transactionType: {
    field: 'transaction_type',
    type: DataTypes.STRING,
  },
  transactionDetails: {
    field: 'transaction_details',
    type: DataTypes.TEXT,
  },
});

module.exports = TransactionLog;
