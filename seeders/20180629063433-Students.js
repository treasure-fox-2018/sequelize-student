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
   return queryInterface.bulkInsert('Students', 
   [{first_name:"Francklyn",last_name:"Waghorne",gender:"Male",birthday:"5/31/2001",email:"fwaghorne0@linkedin.com",phone:"177-996-8809",createdAt: new Date(),updatedAt: new Date()},
   {first_name:"Sonnie",last_name:"Simonnet",gender:"Female",birthday:"12/2/2010",email:"ssimonnet1@wunderground.com",phone:"984-673-1275",createdAt: new Date(),updatedAt: new Date()},
   {first_name:"Jarid",last_name:"Boswood",gender:"Male",birthday:"3/29/2014",email:"jboswood2@cargocollective.com",phone:"528-334-7807",createdAt: new Date(),updatedAt: new Date()},
   {first_name:"Gay",last_name:"Good",gender:"Female",birthday:"9/25/1990",email:"ggood3@cocolog-nifty.com",phone:"272-919-0619",createdAt: new Date(),updatedAt: new Date()},
   {first_name:"Iorgo",last_name:"Ghelerdini",gender:"Male",birthday:"12/27/2004",email:"ighelerdini4@mysql.com",phone:"740-975-9610",createdAt: new Date(),updatedAt: new Date()},
   {first_name:"Cordie",last_name:"Pigny",gender:"Female",birthday:"5/28/2008",email:"cpigny5@earthlink.net",phone:"597-743-1869",createdAt: new Date(),updatedAt: new Date()},
   {first_name:"Kristyn",last_name:"Tebbutt",gender:"Female",birthday:"10/29/2007",email:"ktebbutt6@archive.org",phone:"214-740-1442",createdAt: new Date(),updatedAt: new Date()},
   {first_name:"Morley",last_name:"Herche",gender:"Male",birthday:"12/13/2009",email:"mherche7@howstuffworks.com",phone:"653-608-3157",createdAt: new Date(),updatedAt: new Date()},
   {first_name:"Reinhard",last_name:"Rodnight",gender:"Male",birthday:"8/20/2010",email:"rrodnight8@uiuc.edu",phone:"326-413-1355",createdAt: new Date(),updatedAt: new Date()},
   {first_name:"Tarrah",last_name:"Alejandri",gender:"Female",birthday:"7/29/1999",email:"talejandri9@foxnews.com",phone:"305-519-7340",createdAt: new Date(),updatedAt: new Date()}],
    {})},  

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete('Person', null, {});
  }
};
