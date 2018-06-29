'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
      return queryInterface.addColumn(
        'students',
        'height',
        {type: Sequelize.INTEGER}
      )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'students',
      'height',
    )

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
