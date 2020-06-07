'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'usuarios',
        'id_tipo_usuario',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'tipos_usuarios',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'usuarios',
      'id_tipo_usuario'
    );
  }
};
