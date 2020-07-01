'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'colaboradores',
        'usuario_id', 
        { 
          type: Sequelize.INTEGER,
          references: {
            model: 'usuarios',
            key: 'id',
          },
          allowNull: false,
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',

        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'colaboradoes',
        'usuario_id'
        );
  }
};
