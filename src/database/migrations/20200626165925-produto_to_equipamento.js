'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'equipamento',
        'produto_id',
        { 
          type: Sequelize.INTEGER,
          references: {
            model: 'produto',
            key: 'id'
          },
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'equipamento',
        'produto_id',
      );
  }
};
