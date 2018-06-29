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
        first_name : "Nikolas",
        last_name : "Friesen",
        gender : "female",
        birthday : "1998-12-24",
        email : "agustina_braun@wintheiser.info",
        phone : "449.897.7415",
        createdAt : new Date,
        updatedAt : new Date
      },{
        first_name : "Randi",
        last_name : "Halvorson",
        gender : "male",
        birthday : "1997-01-29",
        email : "heber.upton@bechtelarwisozk.biz",
        phone : "(697)436-2633",
        createdAt : new Date,
        updatedAt : new Date
      },{
        first_name : "Sally",
        last_name : "Buckridge",
        gender : "female",
        birthday : "1997-10-30",
        email : "nora@treutel.name",
        phone : "1-351-672-3658-02502",
        createdAt : new Date,
        updatedAt : new Date
      },{
        first_name : "Morris",
        last_name : "Swift",
        gender : "male",
        birthday : "1995-06-27",
        email : "cordell@sanfordkuhlman.org",
        phone : "(600)142-5639-9380",
        createdAt : new Date,
        updatedAt : new Date
      },{
        first_name : "Sidney",
        last_name : "Ortiz",
        gender : "male",
        birthday : "1997-04-04",
        email : "erling@davis.name",
        phone : "554.170.3265",
        createdAt : new Date,
        updatedAt : new Date
      }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Students', null, {});    
  }
};
