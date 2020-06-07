'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'emails',
        'id_cliente',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'clientes',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'emails',
      'id_cliente'
    );
  }
};