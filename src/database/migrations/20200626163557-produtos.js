'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('produtos', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        descricao: {
          type: Sequelize.STRING(128),
          allowNull: false,
          unique: true,
        },
        valor_custo: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        valor_venda: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        estoque: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('produtos');
  }
};
