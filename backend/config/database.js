const { Sequelize } = require('sequelize');

// Configure os parâmetros da conexão com o banco de dados
const sequelize = new Sequelize({
  dialect: 'mysql', // Ou 'postgres' para PostgreSQL
  host: 'localhost',
  username: 'root',
  password: 'null',
  database: 'melado',
});

// Testar a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão bem-sucedida com o banco de dados.');
  })
  .catch((error) => {
    console.error('Erro na conexão com o banco de dados:', error);
  });

module.exports = sequelize;
