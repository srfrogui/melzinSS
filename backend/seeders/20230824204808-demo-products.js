'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Produto 1',
        description: 'Descrição do Produto 1',
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Produto 2',
        description: 'Descrição do Produto 2',
        quantity: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Adicione mais produtos aqui
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
