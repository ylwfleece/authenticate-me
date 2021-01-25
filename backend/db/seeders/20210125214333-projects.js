'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Projects', [{
        name: 'Well in Uganda',
        costPerShare: 0.1,
        karmaPerShare: 2,
        numberOfShares: 100000,
        karmaReleased: false,
        charityId: 4,
        adminId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'School in Laos',
        costPerShare: 0.35,
        karmaPerShare: 1,
        numberOfShares: 350000,
        karmaReleased: false,
        charityId: 3,
        adminId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sending 1000 nets to village in Tanzania',
        costPerShare: 0.25,
        karmaPerShare: 3,
        numberOfShares: 10000,
        karmaReleased: false,
        charityId: 5,
        adminId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('Projects', null, {});
    
  }
};
