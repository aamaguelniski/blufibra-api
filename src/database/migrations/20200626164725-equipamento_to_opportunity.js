'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'equipamento',
        'opportunity_id',
        { 
          type: Sequelize.INTEGER,
          references: {
            model: 'opportunity',
            key: 'id',
          },
          allowNull: false,
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'equipamento',
        'opportunity_id',
      );
  }
};
