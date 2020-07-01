'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'opportunity',
      'colaborador_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'colaborador',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'opportunity',
      'colaborador_id'
    );
  }
};
