'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoa_fisica', 
      { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        primeiro_nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ultimo_nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cpf: {
          type: Sequelize.STRING(14),
          allowNull: false,
          unique: true,
        },
        rg: {
          type: Sequelize.STRING(14),
          allowNull: false,
          unique: true
        },
        data_nascimento: {
          type: Sequelize.DATE,
          allowNull:false,
        },
        nome_pai: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        nome_mae: {
          type: Sequelize.STRING,
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
      }
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('pessoa_fisica');
  }
};
