'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'cliente',
        'usuario_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'usuario',
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
      'cliente',
      'usuario_id'
    );
  }
};
