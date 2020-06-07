'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'telefones',
        'id_tipo_contato',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'tipos_contatos',
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
      'id_tipo_contato'
    );
  }
};