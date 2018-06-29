'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [queryInterface.changeColumn('Students', 'createdAt', {type:Sequelize.STRING, defaultValue:new Date()}, {}),
            queryInterface.changeColumn('Students', 'updatedAt', {type:Sequelize.STRING, defaultValue:new Date()}, {})]   
  },

  down: (queryInterface, Sequelize) => {
  }
};
