'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'endereco',
        'cidade_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'cidade',
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
      'endereco',
      'cidade_id'
    );
  }
};