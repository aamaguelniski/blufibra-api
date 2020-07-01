'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'opportunity',
        'lead_id',
        { 
          type: Sequelize.INTEGER,
          references: {
            model: 'lead',
            key: 'id',
          },
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'opportunity',
        'lead_id'
        );
  }
};
