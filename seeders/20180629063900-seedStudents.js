'use strict';

let faker = require('faker')


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Students', [{

      first_name: faker.name.findName(),
      last_name: faker.name.lastName(),
      gender: 'female',
      birthday: faker.date.between('1990-01-01', '2000-01-05'),
      email:'Newton_Schuster@hotmailcom',
      phone: faker.random.number({ min: 6280000, max: 6289999 }),

      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}); s



  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
