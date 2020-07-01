'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('equipamentos', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('equipamentos');
  }
};
