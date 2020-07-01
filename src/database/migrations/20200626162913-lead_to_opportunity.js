'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'opportunities',
        'lead_id',
        { 
          type: Sequelize.INTEGER,
          references: {
            model: 'leads',
            key: 'id',
          },
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'opportunities',
        'lead_id'
        );
  }
};
