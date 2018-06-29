'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn('Students', 'height', { type: Sequelize.INTEGER})
      .then(() => {
          queryInterface.addColumn('Students', 'other_email', {type: Sequelize.STRING})
            .then(() => {
              queryInterface.addColumn('Students', 'other_phone', {type: Sequelize.STRING})
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

   return queryInterface.removeColumn('Students', 'height')
   .then(() => {
       queryInterface.removeColumn('Students', 'other_email')
         .then(() => {
           queryInterface.removeColumn('Students', 'other_phone')
         })
   })
  }
};
