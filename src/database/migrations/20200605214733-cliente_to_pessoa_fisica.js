'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'pessoa_fisica',
        'cliente_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'cliente',
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
      'pessoa_fisica',
      'cliente_id'
    );
  }
};
