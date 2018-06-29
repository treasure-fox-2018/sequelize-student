'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Students', [{
        first_name: 'Sally',
        last_name: 'Buckridge',
        gender: 'female',
        birthday: new Date('1997-10-30'),
        email: 'nora@treutel.name',
        phone: '1-351-672-6358x02502',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        first_name: 'Morris',
        last_name: 'Swift',
        gender: 'male',
        birthday: new Date('1995-06-27'),
        email: 'cordell@sanfordkuhlman.org',
        phone: '(600)142-5639x9380',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        first_name: 'Sidney',
        last_name: 'Ortiz',
        gender: 'male',
        birthday: new Date('1997-04-04'),
        email: 'erling@davis.name',
        phone: '554.170.3265',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Cary',
        last_name: 'Schoen',
        gender: 'male',
        birthday: new Date('1996-07-31'),
        email: 'fay@runolfon.biz',
        phone: '1-828-134-7828x66958',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Mazie',
        last_name: 'Gibson',
        gender: 'female',
        birthday: new Date('1995-09-23'),
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
