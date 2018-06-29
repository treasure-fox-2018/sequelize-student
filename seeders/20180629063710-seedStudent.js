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
   return queryInterface.bulkInsert('students', [
     {
      first_Name:"Shelley",
     last_name:"Souten",
     gender:"Female",
     bithday:"6/13/1991",
     email:"ssouten0@answers.com",
     phone:"553-639-2089",
     createdAt: new Date(),
     updatedAt: new Date(),
    },
    {
     first_Name:"Jarvis",
    last_name:"Elmer",
    gender:"Male",
    bithday:"12/27/1994",
    email:"jelmer1@wsj.com",
    phone:"617-806-1514",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
   {
     first_Name:"Osbourne",
     last_name: "Elboux",
     gender:"Male",
     bithday:"4/6/1994",
     email:"odelboux2@statcounter.com",
     phone:"224-368-9043",
     createdAt: new Date(),
     updatedAt: new Date(),
    },
   {
     first_Name:"Toddie",
     last_name:"Russam",
     gender:"Male",
     bithday:"10/16/1999",
     email:"trussam3@indiatimes.com",
     phone:"254-903-5876",
     createdAt: new Date(),
     updatedAt: new Date(),
    },
   {
     first_Name:"Blakelee",
     last_name:"Whitwam",
     gender:"Female",
     bithday:"1/14/1998",
     email:"bwhitwam4@disqus.com",
     phone:"322-130-7493",
     createdAt: new Date(),
     updatedAt: new Date(),
    },
   {
     first_Name:"Keely",
     last_name:"Muggleton",
     gender:"Female",
     bithday:"2/9/1997",
     email:"kmuggleton5@engadget.com",
     phone:"494-900-1657",
     createdAt: new Date(),
     updatedAt: new Date(),
    },
   {
     first_Name:"Cristobal",
     last_name:"Stopps",
     gender:"Male",
     bithday:"1/20/1994",
     email:"cstopps6@businessweek.com",
     phone:"455-561-0989",
     createdAt: new Date(),
     updatedAt: new Date(),
    },
   {
     first_Name:"Tamra",
     last_name:"Barnson",
     gender:"Female",
     bithday:"7/3/1995",
     email:"tbarnson7@intel.com",
     phone:"190-924-4400",
     createdAt: new Date(),
     updatedAt: new Date(),
    },
   {
     first_Name:"Saunders",
     last_name:"Wheowall",
     gender:"Male",
     bithday:"5/3/1991",
     email:"swheowall8@jigsy.com",
     phone:"393-410-1193",
     createdAt: new Date(),
     updatedAt: new Date(),
    },
   {
     first_Name:"Danita",
     last_name:"Bundock",
     gender:"Female",
     bithday:"7/6/1991",
     email:"dbundock9@rediff.com",
     phone:"333-811-0140",
     createdAt: new Date(),
     updatedAt: new Date(),
    }]
   
  )
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
