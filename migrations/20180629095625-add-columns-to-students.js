'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.
      //
      // Example:
      return queryInterface.addColumn('students', "email2", {type: Sequelize.STRING})
      .then(() => {
        queryInterface.addColumn('students', "height", {type: Sequelize.INTEGER})
      }).then(() => {
        queryInterface.addColumn('students', "phone2", {type: Sequelize.STRING})
      })

  },

  down: (queryInterface, Sequelize) => {
    // /*

      return queryInterface.removeColumn('students', "email2")
      .then(() => {
        queryInterface.removeColumn('students', "height")
      }).then(() => {
        queryInterface.removeColumn('students', "phone2")
      })
    // */
  }
};
