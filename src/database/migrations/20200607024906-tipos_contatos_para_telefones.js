'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'telefones',
        'tipo_contato_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'tipo_contatos',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'telefones',
      'tipo_contato_id'
    );
  }
};