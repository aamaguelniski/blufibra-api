'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'opportunities',
      'colaborador_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'colaboradores',
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
      'opportunities',
      'colaborador_id'
    );
  }
};
