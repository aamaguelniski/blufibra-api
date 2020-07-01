'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'colaborador',
        'usuario_id', 
        { 
          type: Sequelize.INTEGER,
          references: {
            model: 'usuario',
            key: 'id',
          },
          allowNull: false,
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',

        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'colaborador',
        'usuario_id'
        );
  }
};
