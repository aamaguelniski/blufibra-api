'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('pessoa_juridica', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        razao_social: {
          type: Sequelize.STRING(128),
          allowNull: false,
        },
        nome_fantasia: {
          type: Sequelize.STRING(128),
          allowNull: false,
        },
        cnpj: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        ie: {
          type: Sequelize.STRING(20),
          allowNull: true,
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
      return queryInterface.dropTable('pessoa_juridica');
  }
};
