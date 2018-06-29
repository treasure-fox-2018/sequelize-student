'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

   return queryInterface.addColumn('Students', "height", { type : Sequelize.INTEGER})
   .then(() => {
     queryInterface.addColumn('Students', "email2", { type : Sequelize.STRING})
       .then( () => {
         queryInterface.addColumn('Students', "phone2", { type : Sequelize.STRING})
       })
   })

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.removeColumn('Students', "height")
   .then(() => {
     queryInterface.removeColumn('Students', "email2")
       .then(() => {
         queryInterface.removeColumn('Students', "phone2")
       })
   })
  }
}
