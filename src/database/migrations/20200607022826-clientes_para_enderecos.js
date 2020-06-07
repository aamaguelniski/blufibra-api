'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'enderecos',
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
      'enderecos',
      'id_cliente'
    );
  }
};