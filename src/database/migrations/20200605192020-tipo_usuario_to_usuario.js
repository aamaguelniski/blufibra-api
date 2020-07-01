'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'usuario',
        'tipo_usuario_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'tipo_usuario',
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
      'usuario',
      'tipo_usuario_id',
    );
  }
};
