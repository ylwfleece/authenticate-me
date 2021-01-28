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

      },{
        name: 'Fistula Foundation',
        createdAt: new Date(),
        updatedAt: new Date()

      },{
        name: 'Malaria Consortium',
        createdAt: new Date(),
        updatedAt: new Date()

      },{
        name: 'Hellen Keller International',
        createdAt: new Date(),
        updatedAt: new Date()

      },{
        name: 'New Incentives',
        createdAt: new Date(),
        updatedAt: new Date()

      },{
        name: 'SCI Foundation',
        createdAt: new Date(),
        updatedAt: new Date()

      },{
        name: 'Evidence Action',
        createdAt: new Date(),
        updatedAt: new Date()

      },{
        name: 'Sightsavers',
        createdAt: new Date(),
        updatedAt: new Date()

      },], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Charities', null, {}); 
  }
};
