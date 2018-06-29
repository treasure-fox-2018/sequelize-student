'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('students', [{
        first_name: 'Reid',
        last_name: 'Skiles',
        gender: 'male',
        birthday: '1994-10-13',
        email: 'mike_harvey@wnikolaus.com',
        phone: '(543)511-2123',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        first_name: 'Violet',
        last_name: 'Dickens',
        gender: 'female',
        birthday: '1994-11-19',
        email: 'rubye_olson@collins.biz',
        phone: '1-410-486-1411x5058',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        first_name: 'Marguerite',
        last_name: 'Flatley',
        gender: 'female',
        birthday: '1995-05-28',
        email: 'wanda_okon@hane.name',
        phone: '572.978.5258x07860',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        first_name: 'Cary',
        last_name: 'Schoen',
        gender: 'male',
        birthday: '1996-07-31',
        email: 'fay@runolfon.biz',
        phone: '1-828-134-7828x66958',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        first_name: 'Mazie',
        last_name: 'Gibson',
        gender: 'female',
        birthday: '1995-09-23',
        email: 'doug@roberts.biz',
        phone: '144.038.7351x24117',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
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
