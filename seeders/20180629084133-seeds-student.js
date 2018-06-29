'use strict';
const faker = require('faker')
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
    return queryInterface.bulkInsert('Students', [
      {
      first_name:"Shelley",
      last_name:"Souten",
      gender:"Female",
      birthday:faker.date.between('1990-01-01', '2000-12-31'),
      email:"ssouten0@answers.com",
      phone:"553-639-2089",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      first_name:"Jarvis",
      last_name:"Elmer",
      gender:"Male",
      birthday:faker.date.between('1990-01-01', '2000-12-31'),
      email:"jelmer1@wsj.com",
      phone:"617-806-1514",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      first_name:"Osbourne",
      last_name: "Elboux",
      gender:"Male",
      birthday:faker.date.between('1990-01-01', '2000-12-31'),
      email:"odelboux2@statcounter.com",
      phone:"224-368-9043",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      first_name:"Toddie",
      last_name:"Russam",
      gender:"Male",
      birthday:faker.date.between('1990-01-01', '2000-12-31'),
      email:"trussam3@indiatimes.com",
      phone:"254-903-5876",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      first_name:"Blakelee",
      last_name:"Whitwam",
      gender:"Female",
      birthday:faker.date.between('1990-01-01', '2000-12-31'),
      email:"bwhitwam4@disqus.com",
      phone:"322-130-7493",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      first_name:"Keely",
      last_name:"Muggleton",
      gender:"Female",
      birthday:faker.date.between('1990-01-01', '2000-12-31'),
      email:"kmuggleton5@engadget.com",
      phone:"494-900-1657",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      first_name:"Cristobal",
      last_name:"Stopps",
      gender:"Male",
      birthday:faker.date.between('1990-01-01', '2000-12-31'),
      email:"cstopps6@businessweek.com",
      phone:"455-561-0989",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      first_name:"Tamra",
      last_name:"Barnson",
      gender:"Female",
      birthday:faker.date.between('1990-01-01', '2000-12-31'),
      email:"tbarnson7@intel.com",
      phone:"190-924-4400",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      first_name:"Saunders",
      last_name:"Wheowall",
      gender:"Male",
      birthday:faker.date.between('1990-01-01', '2000-12-31'),
      email:"swheowall8@jigsy.com",
      phone:"393-410-1193",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      first_name:"Danita",
      last_name:"Bundock",
      gender:"Female",
      birthday:faker.date.between('1990-01-01', '2000-12-31'),
      email:"dbundock9@rediff.com",
      phone:"333-811-0140",
      createdAt: new Date(),
      updatedAt: new Date(),
    }],{})
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
