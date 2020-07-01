'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'cliente',
        'base_id', 
        { 
          type: Sequelize.INTEGER,
          references: {
            model: 'base',
            key: 'id',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
          allowNull: false,
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'cliente',
        'base_id'
      );
  }
};
