'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Students', 'height', {type: Sequelize.INTEGER})
   .then(() => {
     queryInterface.addColumn('Students', 'secondEmail',  {type: Sequelize.STRING})
     .then (() => {
       queryInterface.addColumn('Students', 'secondPhone', {type: Sequelize.STRING})
     })
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Students', 'height')
    .then(() => {
      queryInterface.removeColumn('Students', 'secondEmail')
      .then (() => {
        queryInterface.removeColumn('Students', 'secondPhone')
      })
    })
   },
};
