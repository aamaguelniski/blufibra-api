'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'equipamentos',
        'produto_id',
        { 
          type: Sequelize.INTEGER,
          references: {
            model: 'produtos',
            key: 'id'
          },
          allowNull: false,
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable(
        'equipamentos',
        'produto_id',
      );
  }
};
