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

    return queryInterface.bulkInsert('Students',[{
      first_name: 'Nikolas',
      last_name: 'Friesen',
      gender: 'female',
      birthday: new Date('1998-12-24'),
      email: 'agustina_braun@wintheiser.info',
      phone: '449.897.7415',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      first_name: 'Randi',
      last_name: 'Halvorson',
      gender: 'male',
      birthday: new Date('1997-01-29'),
      email: 'heber.upton@bechtelarwisokz.biz',
      phone: '(697)436-2633',
      createdAt : new Date(),
      updatedAt : new Date()},
    {
      first_name: 'Sally',
      last_name: 'Buckridge',
      gender: 'female',
      birthday: new Date('1997-10-30'),
      email: 'nora@treuteul.name',
      phone: '1-351-672-6358x02502',
      createdAt : new Date(),
      updatedAt : new Date()},
    {
      first_name: 'Morris',
      last_name: 'Swift',
      gender: 'male',
      birthday: new Date('1995-06-27'),
      email: 'cordel@sandord.org',
      phone: '(600)142-5639x9380',
      createdAt : new Date(),
      updatedAt : new Date()},
    {
      first_name: 'Sidney',
      last_name: 'Ortiz',
      gender: 'male',
      birthday: new Date('1997-10-30'),
      email: 'erling@davis.name',
      phone: '0865xxxx98',
      createdAt : new Date(),
      updatedAt : new Date()},
    {
      first_name: 'Reid',
      last_name: 'Skiles',
      gender: 'male',
      birthday: new Date('1994-10-13'),
      email: 'reid@treuteul.name',
      phone: '1-3245-987xxx99',
      createdAt : new Date(),
      updatedAt : new Date()},
    {
      first_name: 'Violet',
      last_name: 'Dicknes',
      gender: 'female',
      birthday: new Date('1994-11-19'),
      email: 'violet@treuteul.name',
      phone: '1-351-672-6358yt02502',
      createdAt : new Date(),
      updatedAt : new Date()},
    {
      first_name: 'Marguerite',
      last_name: 'Flately',
      gender: 'female',
      birthday: new Date('1995-05-18'),
      email: 'Marguerite@treuteul.name',
      phone: '1-351-672-45602',
      createdAt : new Date(),
      updatedAt : new Date()},
    {
      first_name: 'Cary',
      last_name: 'Schoen',
      gender: 'male',
      birthday: new Date('1995-05-18'),
      email: 'Schoen@treuteul.name',
      phone: '1-351-572-467602',
      createdAt : new Date(),
      updatedAt : new Date()},
    {
      first_name: 'Mazy',
      last_name: 'Gibson',
      gender: 'female',
      birthday: new Date('1995-05-18'),
      email: 'Mazy@treuteul.name',
      phone: '1-351-672-467902',
      createdAt : new Date(),
      updatedAt : new Date()},
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Person', null, {});
  }
};
