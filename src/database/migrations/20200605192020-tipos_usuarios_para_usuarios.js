'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'usuarios',
        'tipo_usuario_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'tipo_usuarios',
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
      'usuarios',
      'tipo_usuario_id'
    );
  }
};
