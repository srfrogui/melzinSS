const Sequelize = require('sequelize');
const Product = require('./product');
const Order = require('./order');
const sequelize = new Sequelize('database_development', 'root', null, {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;



// Associação entre Produto e Pedido (Muitos-para-Muitos)
Order.belongsToMany(Product, { through: 'OrderProducts' });
Product.belongsToMany(Order, { through: 'OrderProducts' });
