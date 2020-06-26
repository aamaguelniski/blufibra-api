'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'equipamentos',
        'opportunity_id',
        { 
          type: Sequelize.INTEGER,
          references: {
            model: 'oportunities',
            key: 'id',
          },
          allowNull: false,
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'equipamentos',
        'opportunity_id',
      );
  }
};
