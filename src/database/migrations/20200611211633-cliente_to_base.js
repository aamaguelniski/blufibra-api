'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'clientes',
        'base_id', 
        { 
          type: Sequelize.INTEGER,
          references: {
            model: 'bases',
            key: 'id',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
          allowNull: false,
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'clientes',
        'base_id'
      );
  }
};
