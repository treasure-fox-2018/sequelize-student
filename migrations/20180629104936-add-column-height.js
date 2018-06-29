'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('students', 'height', {
          allowNull:false,
          type: Sequelize.INTEGER,
          defaultValue: 165,
      })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('students', 'height');
  }
};
