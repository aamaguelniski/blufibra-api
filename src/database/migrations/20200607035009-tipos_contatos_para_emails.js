'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'emails',
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
      'emails',
      'id_tipo_contato'
    );
  }
};