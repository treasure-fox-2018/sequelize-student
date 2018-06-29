'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    //  change_column :table_name, :column_name, 'integer USING CAST(column_name AS integer)
//     queryInterface.changeColumn('table', 'column', {
//       type: 'INTEGER USING CAST("column" as INTEGER)'
// });
     return queryInterface.changeColumn('students','birthday',{type:'DATE USING CAST("birthday" AS DATE)'})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
