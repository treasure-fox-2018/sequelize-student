'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', [
    {first_name:"Red",last_name:"Sheering",gender:"Male",birthday:new Date("1-13-1994"),email:"rsheering0@netscape.com",phone:"9039254627",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Kent",last_name:"Waulker",gender:"Male",birthday:new Date("6-30-1997"),email:"kwaulker1@wordpress.com",phone:"6911918910",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Frasquito",last_name:"Pelham",gender:"Male",birthday:new Date("1-12-1998"),email:"fpelham2@wunderground.com",phone:"6645351581",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Codie",last_name:"Whitelaw",gender:"Female",birthday:new Date("11-10-1994"),email:"cwhitelaw3@trellian.com",phone:"9077855665",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Aaron",last_name:"Westwick",gender:"Male",birthday:new Date("10-18-1994"),email:"awestwick4@etsy.com",phone:"3342668504",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Jarred",last_name:"Comber",gender:"Male",birthday:new Date("5-25-1997"),email:"jcomber5@slashdot.org",phone:"6051261606",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Garrot",last_name:"Britton",gender:"Male",birthday:new Date("8-16-1999"),email:"gbritton6@goo.ne.jp",phone:"6214318762",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Elly",last_name:"Carsberg",gender:"Female",birthday:new Date("5-8-1997"),email:"ecarsberg7@google.de",phone:"7486829144",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Inessa",last_name:"Dominguez",gender:"Female",birthday:new Date("8-29-1997"),email:"idominguez8@bbc.co.uk",phone:"3801326281",createdAt: new Date(),updatedAt: new Date()},
    {first_name:"Eugenie",last_name:"Charpling",gender:"Female",birthday:new Date("8-13-1999"),email:"echarpling9@nationalgeographic.com",phone:"7451709847",createdAt: new Date(),updatedAt: new Date()},],
    {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {});
  }
};
