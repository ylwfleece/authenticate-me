'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        accountBalance: 10000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        accountBalance: 10000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        accountBalance: 10000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'admin',
        hashedPassword: bcrypt.hashSync('password'),
        accountBalance: 10000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};