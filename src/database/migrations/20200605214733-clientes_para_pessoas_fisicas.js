'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'pessoas_fisicas',
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
      'pessoas_fisicas',
      'id_cliente'
    );
  }
};
