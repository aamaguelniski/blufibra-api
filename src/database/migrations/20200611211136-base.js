'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('bases', 
      { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        identificacao: {
          type: Sequelize.STRING(128),
          allowNull: false,
          unique: true,
        },
        endereco: {
          type: Sequelize.STRING(128),
          allowNull: false,
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
      return queryInterface.dropTable('bases');
  }
};
