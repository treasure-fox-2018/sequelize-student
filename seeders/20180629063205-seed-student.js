'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    var counter = "1";

    var data = counter.repeat(4).split("").map((i) => {
      return {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        gender: "male",
        birthday: faker.date.between('2000-01-01', '2015-01-05'),
        email: faker.internet.email(),
        phone: 10002830,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })

    return queryInterface.bulkInsert('students', data, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('students', null, {});

  }
};
