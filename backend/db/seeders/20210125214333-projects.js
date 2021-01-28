'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Projects', [{
        name: 'Well in Uganda',
        costPerShare: 0.1,
        karmaPerShare: 2,
        numberOfShares: 100000,
        karmaReleased: false,
        charityId: 2,
        adminId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'School in Laos',
        costPerShare: 0.35,
        karmaPerShare: 1,
        numberOfShares: 350000,
        karmaReleased: false,
        charityId: 1,
        adminId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sending 1000 nets to Tanzania',
        costPerShare: 0.25,
        karmaPerShare: 3,
        numberOfShares: 10000,
        karmaReleased: false,
        charityId: 3,
        adminId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Fistula Surgery',
        costPerShare: 0.06,
        karmaPerShare: 4,
        numberOfShares: 10000,
        karmaReleased: false,
        charityId: 4,
        adminId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chemoprevention program in Nigeria',
        costPerShare: 0.15,
        karmaPerShare: 4,
        numberOfShares: 1000,
        karmaReleased: false,
        charityId: 5,
        adminId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Sending vitamin A supplementation package to The Gambia',
        costPerShare: 0.02,
        karmaPerShare: 1,
        numberOfShares: 100000,
        karmaReleased: false,
        charityId: 6,
        adminId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Vaccine incentive program in Nigeria',
        costPerShare: 0.09,
        karmaPerShare: 3,
        numberOfShares: 15000,
        karmaReleased: false,
        charityId: 7,
        adminId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Deworming program in Mali',
        costPerShare: 0.05,
        karmaPerShare: 2,
        numberOfShares: 20000,
        karmaReleased: false,
        charityId: 8,
        adminId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'General research fund',
        costPerShare: 0.01,
        karmaPerShare: 1,
        numberOfShares: 1000000,
        karmaReleased: false,
        charityId: 9,
        adminId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Cataract surgery field trip in Mali',
        costPerShare: 0.50,
        karmaPerShare: 5,
        numberOfShares: 10000,
        karmaReleased: false,
        charityId: 10,
        adminId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('Projects', null, {});
    
  }
};
