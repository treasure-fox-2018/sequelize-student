const faker = require('faker')
'use strict';

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

    return queryInterface.bulkInsert("Students", [{
      first_name: "Ari",
      last_name: "Supriatna",
      gender: "Male",
      birthday: "1999-08-14",
      email: "arisupriatna703@gmail.com",
      phone: "085777282844",
      createdAt: new Date(),
      updatedAt: new Date(),
      tinggi_badan: 173,
    }, {
      first_name: "Ridho",
      last_name: "Ramadhan",
      gender: "Male",
      birthday: "2009-09-18",
      email: "ridho@gmail.com",
      phone: "08577722626",
      createdAt: new Date(),
      updatedAt: new Date(),
      tinggi_badan: 125,
    }, {
      first_name: "Siska",
      last_name: "Indriyanti",
      gender: "Female",
      birthday: "2009-07-21",
      email: "siska@gmail.com",
      phone: "085727222228",
      createdAt: new Date(),
      updatedAt: new Date(),
      tinggi_badan: 120,
    }, {
      first_name: "Muhammad",
      last_name: "Dawi",
      gender: "Male",
      birthday: "1993-08-14",
      email: "dawi@gmail.com",
      phone: "08577272788",
      createdAt: new Date(),
      updatedAt: new Date(),
      tinggi_badan: 163,
    }])
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
