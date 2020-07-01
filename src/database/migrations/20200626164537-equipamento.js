'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('equipamento', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('equipamento');
  }
};
