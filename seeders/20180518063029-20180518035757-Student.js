'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Students', [
    {
      id: 1,
      firstName: 'Nikolas',
      lastName: 'Freisen',
      gender: 'male',
      birthday: '1998-12-24',
      email: 'agustina_braun@wintheiser.info',
      phone: '449.897.7415',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      firstName: 'Randi',
      lastName: 'Halvorson',
      gender: 'male',
      birthday: '1997-01-29',
      email: 'heber.upton@bechtelarwisozk.biz',
      phone: '(697)436-2633',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      firstName: 'Sally',
      lastName: 'Buckridge',
      gender: 'female',
      birthday: '1997-10-30',
      email: 'nora@treutel.name',
      phone: '1-351-672-6358x02502',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      firstName: 'Morris',
      lastName: 'Swift',
      gender: 'male',
      birthday: '1995-06-27',
      email: 'cordell@sanfordkuhlman@org',
      phone: '(600)142-5639x9380',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {id: 5,
      firstName: 'Sidney',
      lastName: 'Ortiz',
      gender: 'male',
      birthday: '1997-04-04',
      email: 'erling@davis.name',
      phone: '554.170.3265',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {id: 6,
      firstName: 'Reid',
      lastName: 'Skiles',
      gender: 'male',
      birthday: '1994-10-13',
      email: 'mike_harvey@nikolaus.com',
      phone: '1-410-486-1411x5058',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 7,
      firstName: 'Violet',
      lastName: 'Dicksen',
      gender: 'female',
      birthday: '1994-11-19',
      email: 'rubye_olson@collins.biz',
      phone: '1-410-486-1411x5058',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 8,
      firstName: 'Marguerite',
      lastName: 'Flatley',
      gender: 'female',
      birthday: '1995-05-28',
      email: 'wanda_okon@hane.name',
      phone: 'fay@runolfon.biz',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 9,
      firstName: 'Cary',
      lastName: 'Schoen',
      gender: 'male',
      birthday: '1996-07-31',
      email: 'fay@runolfon.biz',
      phone: '1-828-134-7828x66958',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 10,
      firstName: 'Mazzie',
      lastName: 'Gibson',
      gender: 'female',
      birthday: '1995-09-23',
      email: 'doug@roberts.biz',
      phone: '144.038.7351x24117',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ],{});
   
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
