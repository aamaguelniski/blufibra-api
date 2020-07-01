'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'enderecos',
        'cidade_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'cidades',
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
      'enderecos',
      'cidade_id'
    );
  }
};