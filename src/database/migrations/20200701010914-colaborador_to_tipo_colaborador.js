'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'colaborador',
        'tipo_colaborador_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'tipo_colaborador',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
        }
      )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'colaborador',
      'tipo_colaborador_id',
    );
  }
};
