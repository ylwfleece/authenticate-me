'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Purchases', [{
        numberOfShares: 100,
        projectId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        numberOfShares: 150,
        projectId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        numberOfShares: 1250,
        projectId: 3,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()

      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Purchases', null, {});
    
  }
};
