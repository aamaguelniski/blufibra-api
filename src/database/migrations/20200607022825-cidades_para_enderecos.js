'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'enderecos',
        'id_cidade',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'cidades',
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
      'id_cidade'
    );
  }
};