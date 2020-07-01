'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('lead', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        primeiro_nome: {
          type: Sequelize.STRING(128),
          allowNull: false,
        },
        ultimo_nome: {
          type: Sequelize.STRING(128),
          allowNull: false
        },
        data: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
        endereco: {
          type: Sequelize.STRING,
          allowNull: false,          
        },
        referencia: {
          type: Sequelize.STRING(128),
        },
        telefone: {
          type: Sequelize.STRING(14),
          allowNull: false,
        },
        observacoes: {
          type: Sequelize.STRING,
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
      return queryInterface.dropTable('lead');
  }
};
