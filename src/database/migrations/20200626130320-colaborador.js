'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('colaboradores', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primarikey: true,
          autoIncrement: true,
          alowNull: false,
        },
        primeiro_nome: {
          type: Sequelize.STRING(128),
          allowNull: false,
        },
        ultimo_nome: {
          type: Sequelize.STRING(128),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(128),
          allowNull: false,
          unique: true,
        },
        telefone: {
          type: Sequelize.STRING(14),
          allowNull: false,
          unique: true,
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
      return queryInterface.dropTable('colaboradores');
  }
};
