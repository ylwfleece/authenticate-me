'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Charities', [{
        name: 'Pencils of Promise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'charity: water',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'Against Malaria Foundation',
        createdAt: new Date(),
        updatedAt: new Date()

      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Charities', null, {}); 
  }
};
